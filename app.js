const express = require('express');
const AWS = require('./.aws/awsCredentials.js');
const bodyParser = require('body-parser')
const transactionModel = require('./database/TransactionModel.js');
const inquiryTemplate = require('./inquiryTemplate.js')
const emailValidator = require('deep-email-validator')
require('dotenv').config({path: './.env'});

const app = express();
app.use(bodyParser.json())

const port = process.env.port || 3000;

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

function validator(body){
    // check email and type is in range

    if (emailValidator.validate(body.email) &&
    body.type >= 0 && body.type < 3 &&
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
    if(validator(req.body)){
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
      new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise()
      .then(
        function(data) {
          // store details with message ID here
          storeDetails(req.body, data.MessageId)
          res.send("success!")
        }).catch(
          function(err) {
          // should I take note of errors?
          console.error(err, err.stack);
          res.send("error");
        });    

    }else{
      res,send("error")
    }
})

app.listen(port);