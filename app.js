const path = require('path');
const Film = require("./film_model");
const express = require("express");
const morgan = require('morgan');

const filmRouter = require('./filmRoutes');
const viewRouter = require('./viewsRoutes');

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(morgan('dev'));

app.use('/api/v1/films', filmRouter);
app.use('/', viewRouter);

module.exports = app;