const { Router } = require('express');
const routerCategorias = Router();

const categoriaCtrl = require('../controlador/categoria-controlador');

// Operaciones CRUD 
routerCategorias.get('/', categoriaCtrl.darCategorias);

routerCategorias.get('/:id', categoriaCtrl.darCategoria);

routerCategorias.post('/', categoriaCtrl.crearCategoria);

routerCategorias.put('/:id', categoriaCtrl.cambiarCategoria);

routerCategorias.delete('/:id', categoriaCtrl.borrarCategoria);

module.exports = routerCategorias;
