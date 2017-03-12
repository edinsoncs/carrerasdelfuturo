var express = require('express');
var router = express.Router();
var viewpanel = require('../models/panel');
var view = require('../models/view');
var viewProfile = require('../models/profile');
var saveProfile = require('../models/saveprofile');
var live = require('../models/live');

var bodyParser = require('body-parser');

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

	
router.get('/', function(req, res, next){
	viewpanel(req, res, next);
});


//Live video clases
router.get('/playclase', function(req, res, next){
	live(req, res, next);
});

router.get('/profile', function(req, res, next){
	viewProfile(req, res, next);
});

router.get('/:video1', function(req, res, next){
	view(req, res, next, req.params.video1);
});

router.post('/saveprofile', multipartMiddleware, function(req, res, next){
	saveProfile(req, res, next, req.files);
});


module.exports = router;