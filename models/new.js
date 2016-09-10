"use strict";
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var generatePassword = require('password-generator');

var User = require('./modeluser');

module.exports = (req, res, next) => {

	/*res.render('registernew', {

	});*/

	var showPassword = generatePassword();
	
	var newUser = User({
		email: req.body.resultado.email,
		password: showPassword,
		payment: {
			'id': req.body.resultado.id,
			'exp_year': req.body.resultado.card.exp_year,
			'exp_month': req.body.resultado.card.exp_month,
			'exp_year': req.body.resultado.card.exp_year,
			'brand': req.body.resultado.card.brand
		}
	});

	newUser.save((err)=>{
		if(err) throw err;
		
		//Send data
		
		res.json({
			email: req.body.resultado.email,
			password: showPassword
		});

	});

	//console.log(req.body); */
}