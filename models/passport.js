"use strict";
var mongoose = require('mongoose');
var usuario = mongoose.model('User');

var local = require('passport-local').Strategy;

module.exports = (passport) => {

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((id, done) => {
        usuario.findById(id, (err, user) => {
            if (err) throw err;
            done(err, user);
        })
    });


    passport.use(new local({
        usernameField: 'email',
        passwordField: 'password'
    }, (username, password, done) => {
        process.nextTick(() => {
            usuario.findOne({
                'email': username,
                'password': password
            }, (err, user) => {

                if (err) {
                    return done(err);
                }

                if (!user) {
                    console.log('ocurrio un error');
                    return done(null, false);
                }

                if (user.password != password) {
                    console.log('hubo un error en la cuenta');
                    return done(null, false);
                }
                return done(null, user);
            });
        });

    }));

}
