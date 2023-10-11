var express = require('express');
var router = express.Router();
const customerController = require('../controllers/customer')

router.post('/', customerController);

module.exports = router;