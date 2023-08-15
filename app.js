const express = require('express');

const app = express();

const port = process.env.port || 3000;

function storeDetails(body) {

    // get details of sending email

    // store details in db

    // send email confirmation request

    // notify me of sent request

}

app.post('/email/inquiry', (req, res, next) => {
    console.log(req.body);

    storeDetails(req.body);

    // send request to requestor
})

app.post('/email/resume', (req, res, next) => {
    storeDetails(req.body);

    // send cv attachment to requestor
    
})

app.listen(port);