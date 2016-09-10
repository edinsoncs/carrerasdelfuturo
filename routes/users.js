var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var modeluser = require('../models/new');

/* GET users listing. */
router.post('/', function(req, res, next) {
  modeluser(req, res, next);
});

module.exports = router;
