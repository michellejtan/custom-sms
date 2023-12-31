var express = require('express');
var router = express.Router();
const {CreateCustomerMessage, getCustomerMessage} = require('../controllers/CustomerMessage')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// module.exports = router;
// /* POST create customer and text */
// //i'm going to pass the controller
router.post('/create-customer-text', CreateCustomerMessage);

router.get('/customer-texts', getCustomerMessage);

module.exports = router;
