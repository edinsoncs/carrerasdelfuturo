var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');

var flash = require('express-flash');
var monk = require('monk');
var db = monk('localhost:27017/carreras');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressSession = require('express-session');

var routes = require('./routes/index');
var users = require('./routes/users');
var panel = require('./routes/panel');
var login = require('./routes/login');
var envivo = require('./routes/envivo');

var curso = require('./routes/cursos');

var register = require('./routes/register');


var generatePassword = require('password-generator');

var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost:27017/carreras', function(err, res) {
    if (err) {
        return err;
    } else {
        console.log('conectado');
    }
});

app.use(function(req, res, next) {
    req.db = db;
    next();
});

/*Cookies Login passport local*/
app.use(expressSession({
    secret: 'ilovescotchscotchyscotchscotch',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 3600000 // one hour in millis
    }
}));
app.use(flash());

/*End Cookies*/

require('./models/modeluser');
require('./models/passport')(passport);


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Initialize passport module 
app.use(passport.initialize());
app.use(passport.session());


function validate(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.redirect('/login');
    }
}

app.use('/', routes);
app.use('/new', users);
app.use('/login', login);

app.use('/curso', curso);

app.use('/panel', validate, panel);
app.use('/envivo', validate, envivo);
app.use('/register', register);


app.get('/notfound', function(req, res, next) {
    res.render('notfound');
});

app.post('/acceso', passport.authenticate('local', {
    successRedirect: '/panel',
    failureRedirect: '/notfound'
}));

app.get('/exit', function(req, res, next) {
    req.logout();
    res.redirect('/');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
