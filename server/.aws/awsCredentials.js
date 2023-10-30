const aws = require('aws-sdk');
require('dotenv').config({path: '../../.env'});

// need to set up an EC2 instance
aws.config.update({
    region: process.env.AWS_REGION,
})

module.exports = aws;