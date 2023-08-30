const express = require('express');
const AWS = require('./.aws/awsCredentials.js');
const bodyParser = require('body-parser')
const transactionModel = require('./database/TransactionModel.js')
const emailValidator = require('deep-email-validator')
require('dotenv').config({path: './.env'});

const app = express();
app.use(bodyParser.json())

const port = process.env.port || 3000;

async function storeDetails(body, messageId) {

    // verify email
    if(emailValidator.validate(body.email)){
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
            console.log(err)
        })
        return true;
    }else{
        return false;
    }
}

function validator(body){
    
}

app.post('/email/inquiry', async (req, res, next) => {
    // create validator function
            
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
         Data: "<div><p>This is the inquiry message from "+ req.body.email + "</p></div>"
        },
       },
       Subject: {
        Charset: 'UTF-8',
        Data: 'Inquiry from ' + req.body.firstName
       }
      },
    Source: process.env.SENDER_EMAIL, 
  };
  
  // Create the promise and SES service object
  new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise()
  .then(
    function(data) {
      console.log(data.MessageId);
      // store details with message ID here
      res.send("success!")
    }).catch(
      function(err) {
      console.error(err, err.stack);
      res.send("error");
    });

})

app.post('/email/resume', (req, res, next) => {
    storeDetails(req.body);

    // send cv attachment to requestor

})

app.listen(port);