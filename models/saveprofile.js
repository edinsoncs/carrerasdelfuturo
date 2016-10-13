"use strict";
var fs = require('fs');
var path = require('path');
var shortid = require('shortid');
var bodyParser = require('body-parser');



module.exports = (req, res, next) => {

	var db = req.db;
	var usuario = db.get('users');


	switch(req.body.toaccess) {
		case 'pdoxlurjhgf':

			  console.log(req.files);
			  console.log(req.file);

			break;
		default:

			console.log('Esta mal');
	
	}



}