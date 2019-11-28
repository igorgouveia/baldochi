const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const router = express.Router();

//Rotas
const index = require('./routes/index');
const customerRoute = require('./routes/customerRoute');
const bookauthorsRoute = require('./routes/bookauthorsRoute');
const bookdescriptionsRoute = require('./routes/bookdescriptionsRoute');
const bookauthorsbooksRoute = require('./routes/bookauthorsbooksRoute');
const bookcategoriesRoute = require('./routes/bookcategoriesRoute');
const bookcategoriesbooksRoute = require('./routes/bookcategoriesbooksRoute');
const bookordersRoute = require('./routes/bookordersRoute');
const bookorderitemsRoute = require('./routes/bookorderitemsRoute');


app.use(bodyParser.urlencoded({ 
    extended: true }))
app.use(bodyParser.json())
app.use('/', index);
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/customers', customerRoute);
app.use('/bookauthors', bookauthorsRoute);
app.use('/bookdescriptions', bookdescriptionsRoute);
app.use('/bookauthorsbooks', bookauthorsbooksRoute);
app.use('/bookcategories', bookcategoriesRoute);
app.use('/bookcategoriesbooks', bookcategoriesbooksRoute);
app.use('/bookorders', bookordersRoute);
app.use('/bookorderitems', bookorderitemsRoute);



module.exports = app;