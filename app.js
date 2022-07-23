import createError from 'http-errors';
import {express, json, urlencoded, static as statico} from 'express';
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import authRouts from './app/routes/auth.js';
import userRouts from './app/routes/user.js';
import scoreRouts from './app/routes/score.js';
import { getMaxListeners } from 'process';

var app = express();




// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(statico(join(__dirname, 'public')));

app.use('/', authRouts);
app.use('/', userRouts)

// catch 404 and forward to error handler
app.use(function(req, res, next) { 
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});





export default app;

