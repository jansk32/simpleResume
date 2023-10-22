const express = require('express');
const AWS = require('./.aws/awsCredentials.js');
const bodyParser = require('body-parser')
const transactionModel = require('./database/TransactionModel.js');
const inquiryTemplate = require('./inquiryTemplate.js')
const emailValidator = require('deep-email-validator')
require('dotenv').config({path: './.env'});

const app = express();
app.use(bodyParser.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://jankwong.net");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

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
   
    if (emailValid.valid &&
    body.type >= 0 && body.type < 5 &&
    body.company.length > 0 &&
    body.firstName.length > 0 && body.company.length <= 20
    ){
      return true;
    }else{
      return false;
    }

}

app.post('/email/inquiry', async (req, res, next) => {
    // create validator function
    let isValid = await validator(req.body);

    if(isValid){
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
      res.sendStatus(400)
    }
});

module.exports = app;
