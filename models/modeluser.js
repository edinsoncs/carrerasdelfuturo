var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuario = new Schema({
	nickname: String,
	namecomplet: String,
	email: String,
	password: String,
	payment: Array,
	ip: Number,
	cursos: Array
});

var User = mongoose.model('User', usuario);

module.exports = User;