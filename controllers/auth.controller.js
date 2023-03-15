const SignInSchema = require('../models/password.model')
const authController = {};
const jsonwebtoken = require('jsonwebtoken');

//funcion para el login
authController.signIn = async (req, res) => {
    const { email } = req.body;
    const { password } = req.body;
    
    console.log('LOG IN')
    console.log(email);
    console.log(password);
    if (password != null && email != null) {
        const user = await SignInSchema.findOne({ "email": email, "password": password});
        console.log(user);
        if (!user) {
            return res.status(401).send("El usuario no existe");
        }
        if (user.password != password) {
            return res.status(401).send("La contraseña es incorrecta");
        }
        const token = jsonwebtoken.sign({ _id: user._id }, 'cuscosecret');
        return res.status(200).send({ token });
    }
    return res.status(404).send('Empty request')
};

module.exports = authController;