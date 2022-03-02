const { Router } = require('express');
const router = Router();

const inventarioCtrl = require('../controlador/inventario-controlador.js');

// Operaciones CRUD 
router.get('/', inventarioCtrl.darObjetos);

router.get('/:id', inventarioCtrl.darObjeto);

router.post('/', inventarioCtrl.crearObjeto);

router.get('/:id', inventarioCtrl.cambiarObjeto);

router.get('/:id', inventarioCtrl.borrarObjeto);

module.exports = router;
