var createError = require('http-errors');
var express = require('express');
const session = require('express-session')  //sesion de express
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { store } = require('./model/database') //importo el store para guardar la sesion en cookie


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const { getMaxListeners } = require('process');

var app = express();




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'secret',    //string, firma la cookie q se guarda en el browser
  resave: false,       //Fuerza que se guarde la sesion
  saveUninitialized: false,  //Fuerza a la sesion que no ha sido inicializada a guardarse
  store: store,
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/ranking', rankingRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) { 
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





module.exports = app;

