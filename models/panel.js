"use strict";

module.exports = (req, res, next) => {

	res.render('panel', {
		title: 'Carreras del futuro - Frontend developer profesional',
		user: req.user
	});

	console.log(req.user);

}