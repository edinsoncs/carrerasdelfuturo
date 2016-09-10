var express = require('express');
var router = express.Router();
var stripe = require('stripe')('sk_test_pW770KoiQ8jDM3Wxm60yFCaC ');
var showuser = require('../models/show');
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {

	console.log(req.body);

    res.render('index', {
        title: 'Carrerasdelfuturo'
    });

});

router.get('/show', function(req, res, next){
	showuser(req, res, next, req.params.url);
});


module.exports = router;
