var express = require('express');
var router = express.Router();
var flightCtrl = require('../controllers/flights');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index',{title:'apples'});
});

module.exports = router;
