var express = require('express');
var router = express.Router();
var iam = require('../iam.json');

/* GET home page. */
router.get('/', function(req, res, next) {

	var len = iam.names.length;
	var text = iam.names[Math.floor(Math.random()*len)];
  	res.render('index', {random: text});
});

module.exports = router;
