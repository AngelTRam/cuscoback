const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();
const passwordController= require('../controllers/password.controller');

//passwordcontroller
router.get('/', passwordController.getPassword);
router.post('/', passwordController.addPassword);
router.put('/:id', passwordController.updatePassword);
router.delete('/:id', passwordController.deletePassword);
router.post('/:id', authController.signIn);

module.exports = router;