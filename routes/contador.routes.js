const express = require('express');
const router = express.Router();
const contadorController = require('../controllers/contador.controller');

router.get('/', contadorController.getContador);
router.post('/', contadorController.addContador);
router.put('/:id', contadorController.updateContador);
router.delete('/:id', contadorController.deleteContador);

module.exports = router;