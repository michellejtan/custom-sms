var express = require('express');
var router = express.Router();
const CreatetestUserController = require('../controllers/testUsers')

router.post('/', CreatetestUserController);

module.exports = router;