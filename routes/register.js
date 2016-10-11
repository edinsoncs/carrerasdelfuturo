var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('../models/modeluser');


router.get('/', function(req, res, next) {

	res.render('register', {
		title: 'Crear cuenta'
	});

});

router.post('/save', function(req, res, next) {

	
	var usuario_register = User({
		'nickname': req.body.usuario,
		'namecomplet': req.body.namefull,
		'email': req.body.email,
		'password': req.body.passwordConfirm
	});


	if(req.body.password == req.body.passwordConfirm) {

		usuario_register.save(function(err){
			if(err){
				return err;
			} else {
				req.flash('info', 'Su cuenta se creo correctamente!');
				res.redirect('/login');
			}
		});
		
	} else {
		req.flash('info', 'La password no coinciden!')
		res.redirect('/register');
	}



});

module.exports = router;