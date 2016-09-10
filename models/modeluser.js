var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuario = new Schema({
	email: String,
	password: String,
	payment: Array,
	ip: Number
});

var User = mongoose.model('User', usuario);

module.exports = User;