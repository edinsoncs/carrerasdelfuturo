"use strict";

var express = require('express');
var router = express.Router();

router.get('/frontend-developer', (req, res, next) => {
	res.render('cursos/curso1', {
		title: 'Curso Profesional Frontend Developer'
	});
});


module.exports = router;