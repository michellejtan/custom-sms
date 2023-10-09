"use strict";
// Remember to destructure using the model name found in the model file
const { textMessage } = require("../models");


// Get the information from the routes, and parse it
const createTextMessage = async (req, res) => {
  console.log(`Logging request: ${req.body}`+JSON.stringify(req.body));

  try {
    await Customer.create({
      message: req.body.message,
      dateSent: req.body.dateSent,
    });
  } catch (error) {
    res.send({ ERROR: error.name, DETAIL: error.parent.detail });
    return;
  }

  res.status(200).send("Successfully saved.");
};

module.exports = createTextMessage;