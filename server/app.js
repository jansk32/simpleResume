const express = require('express');
const AWS = require('./.aws/awsCredentials.js');
const bodyParser = require('body-parser')
const cors = require('cors')

const transactionModel = require('./database/TransactionModel.js');
const inquiryTemplate = require('./inquiryTemplate.js')
const emailValidator = require('deep-email-validator')
require('dotenv').config({path: './.env'});


const app = express();
app.use(bodyParser.json());
app.use(cors());

async function storeDetails(body, messageId) {
        // store details in db
        await transactionModel.create({
            firstName: body.firstName,
            lastName: body.lastName,
            email: body.email,
            company: body.company,
            body: body.message,
            type: body.type,
            messageId: messageId
        })
        .then((resp) => {
            console.log(resp)
        })
        .catch((err) => {
           throw new Error(err.message)
        })
        return true;
}

async function validator(body){
    // check email and type is in range
    let emailValid = await emailValidator.validate({
      email: body.email,
      validateMx: false,
      validateSMTP : true
    });

    let errors = [];

    // if email is not valid
    if (!(emailValid.valid)) {
      errors.push('Email');
    }
    
    // if firstname is not empty
    if(body.firstName.length <= 0){
      errors.push("First Name");
    }

    // if type if not valid
    if(body.type < 0 || body.type > 5){
      errors.push("Type");
    }
    
    // if company name is not empty
    if(body.company.length <= 0){
      errors.push("Company")
    }
   
    if(errors.length > 0){
      return {
        'isValid' : false,
        'errors' : errors,
    };
    } else {
      return {
        'isValid' : true,
        'errors' : [],
      };
    }
    // if (emailValid.valid &&
    // body.type >= 0 && body.type < 5 &&
    // body.company.length > 0 &&
    // body.firstName.length > 0 && body.company.length <= 20
    // ){
    //   return true;
    // }else{
    //   return false;
    // }

}

app.get('/api', async (req, res, next) => {
  res.sendStatus(200);
})

app.post('/api/email/inquiry', async (req, res, next) => {
    // create validator function
    let validating = await validator(req.body);

    if(validating.isValid){
      var params = {
        Destination: { 
          ToAddresses: [
            process.env.SENDER_EMAIL
          ]
        },
        Message: { 
          Body: { 
            Html: {
             Charset: "UTF-8",
             Data: inquiryTemplate(req.body.body, req.body.firstName, req.body.email)
            },
           },
           Subject: {
            Charset: 'UTF-8',
            Data: 'Inquiry from ' + req.body.firstName + 'of ' + req.body.company
           }
          },
        Source: process.env.SENDER_EMAIL, 
      };
      
      // Create the promise and SES service object
      if (process.env.ENV != "development"){
      new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise()
      .then(
        function(data) {
          // store details with message ID here
          storeDetails(req.body, data.MessageId)
          res.sendStatus(200)
        }).catch(
          function(err) {
          // should I take note of errors?
          console.error(err, err.stack);
          res.sendStatus(400);
        });
      }else{
        try{
          storeDetails(req.body, 123);
          res.sendStatus(200);
        }catch(exception){
          res.status(400)
          res.send(exception);
        }
      }    

    }else{
      res.status(400)
      res.send({
        errors: validating.errors
      });
    }
});

module.exports = app;
