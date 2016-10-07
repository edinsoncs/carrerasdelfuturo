var express = require('express');
var router = express.Router();

router.get('/:namelive', function(req, res, next){

	res.render('live',{
		title: 'Curso en vivo'
	});

});
module.exports = router;