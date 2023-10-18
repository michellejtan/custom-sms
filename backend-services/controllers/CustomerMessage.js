'use strict'
// var express = require('express')
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

module.exports = CreateCustomerMessage;