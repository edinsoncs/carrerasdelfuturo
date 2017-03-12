"use strict";

module.exports = (req, res, next) => {

	res.render('live', {
		user: req.user
	});

}