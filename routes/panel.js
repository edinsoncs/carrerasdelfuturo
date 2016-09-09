var express = require('express');
var router = express.Router();
var viewpanel = require('../models/panel');
var view = require('../models/view');

	
router.get('/', function(req, res, next){

	viewpanel(req, res, next);

});

router.get('/:video1', function(req, res, next){
	view(req, res, next, req.params.video1);
});


module.exports = router;