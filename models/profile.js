"use strict";

module.exports = (req, res, next) => {

	res.render('profile', {
		user: req.user
	});

}