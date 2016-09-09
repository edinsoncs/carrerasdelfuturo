var express = require('express');
var router = express.Router();
var viewpanel = require('../models/panel');

	
router.get('/', function(req, res, next){

	viewpanel(req, res, next);

});


module.exports = router;