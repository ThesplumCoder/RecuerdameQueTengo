const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('puerto', 8080);

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(morgan('dev'));

app.use('/api/inventario', require('./rutas/inventario-rutas.js'))

module.exports = app;
