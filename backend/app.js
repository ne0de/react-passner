var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var logger = require('morgan');
var dotenv = require('dotenv').config()
var path = require('path');
var cors = require('cors');

/* dir routes */
var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');

/* db connection */
require('./database/connection')

var app = express();

require('./passport/auth')

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/* passport */
app.use(session({
  secret: process.env.SESSION_PASSWORD,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.logged = req.isAuthenticated()
  next();
});

/* use routes */
app.use('/', indexRouter);
app.use('/user', userRouter);

app.use((req, res, next) => {
  next(createError(404));
});

/* error handler */
app.use((err, req, res, next) => {
  console.log(err)
  next()
});

module.exports = app;
