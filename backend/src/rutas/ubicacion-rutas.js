const { Router } = require('express');
const routerUbicacion = Router();

const ubicacionCtrl = require('../controlador/ubicacion-controlador');

// Operaciones CRUD 
routerUbicacion.get('/', ubicacionCtrl.darUbicaciones);

routerUbicacion.get('/:id', ubicacionCtrl.darUbicacion);

routerUbicacion.post('/', ubicacionCtrl.crearUbicacion);

routerUbicacion.put('/:id', ubicacionCtrl.cambiarUbicacion);

routerUbicacion.delete('/:id', ubicacionCtrl.borrarUbicacion);

module.exports = routerUbicacion;
