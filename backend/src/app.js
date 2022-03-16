const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('puerto', 8080);

app.use(express.json());

app.use(express.urlencoded({extended:false}));

app.use(morgan('dev'));

app.use('/api/objetos', require('./rutas/objeto-rutas'));
app.use('/api/categorias', require('./rutas/categoria-rutas'));
app.use('/api/ubicaciones', require('./rutas/ubicacion-rutas'));

module.exports = app;
