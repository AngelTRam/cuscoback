const passwordModel = require('../models/password.model')
const authController = {};
const jsonwebtoken = require('jsonwebtoken');

//funcion para el login
authController.signIn = async (req, res) => {
    const { password } = req.body;
    const user = await passwordModel.findOne({ password });
    if (!user) return res.status(401).send("La contraseña no existe");
    if (user.password != password) return res.status(401).send("La contraseña es incorrecta");

    const token = jsonwebtoken.sign({ _id: user._id }, 'cuscosecret');
    return res.status(200).send({ token });
};

module.exports = authController;