var express = require('express');
var router = express.Router();
const textMessageController = require('../controllers/textMessage')

router.post('/', textMessageController);

module.exports = router;