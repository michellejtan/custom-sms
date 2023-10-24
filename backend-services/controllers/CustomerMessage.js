'use strict'
// var express = require('express')
const twilio = require('twilio');
require('dotenv').config();

const {CustomerMessage} = require("../models");

// GET THE INFORMATION FROM ROUTES, AND PARSE IT, save to model
const CreateCustomerMessage = async(req, res) => {
    // const CreateCustomerMessage = (req, res) => {
    console.log(`Logging request: ${req.body}`+JSON.stringify(req.body));
    // console.log({req: req.body});
    // console.log({model: {CustomerMessage}});
    //validation
    if(!req.body.phoneNumber || !req.body.message){
        res.status(400).send("Missing fields");
    }

    await CustomerMessage.create({
        phoneNumber: req.body.phoneNumber, 
        message: req.body.message,
    });

    res.status(200).send("Successfully saved!");
    // res.send({Response: 200});
};


// console.log("SECRET KEY::::," accountSid)
const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN;  

const client = new twilio(accountSid, authToken);

client.messages.create({
    body: req.body.message,
    to: req.body.phoneNumber, 
    from: '+18559275532' 
})
.then((message) => console.log(message.sid));
const getCustomerMessage = async (req, res) =>{
    const response = await CustomerMessage.findAll();

    return res.status(200).send(response);
}; //export after, and put in index.js route

module.exports = {
    CreateCustomerMessage,
    getCustomerMessage
};