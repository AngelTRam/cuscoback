const express = require('express');
const router = express.Router();
const datosController = require('../controllers/datos.controller');
const authController = require('../controllers/auth.controller');


router.get('/', datosController.getDatos);
router.get('/resetData', datosController.resetDatos);
router.put('/:limite', datosController.updateDatos);
//router.delete('/:id', datosController.deleteDatos);
router.post('/signin', authController.signIn);

module.exports = router;