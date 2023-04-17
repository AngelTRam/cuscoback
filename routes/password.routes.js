const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();
const passwordController= require('../controllers/password.controller');

//passwordcontroller
router.get('/', passwordController.getPassword);
router.post('/', passwordController.addPassword);
router.put('/', passwordController.updatePassword);
router.delete('/:id', passwordController.deletePassword);
router.post('/signin', authController.signIn);

module.exports = router;