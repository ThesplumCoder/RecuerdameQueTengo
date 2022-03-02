const { Router } = require('express');
const routerObjetos = Router();

const objetoCtrl = require('../controlador/objeto-controlador');

// Operaciones CRUD 
routerObjetos.get('/', objetoCtrl.darObjetos);

routerObjetos.get('/:id', objetoCtrl.darObjeto);

routerObjetos.post('/', objetoCtrl.crearObjeto);

routerObjetos.put('/:id', objetoCtrl.cambiarObjeto);

routerObjetos.delete('/:id', objetoCtrl.borrarObjeto);

module.exports = routerObjetos;
