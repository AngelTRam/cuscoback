const passwordModel = require('../models/password.model');
const passwordController = {};
const jsonwebtoken = require('jsonwebtoken');

passwordController.getPassword = async (req, res) => {
     const password = await passwordModel.find();
     res.json(password);
};

passwordController.addPassword = async (req, res) => {
     const password = new passwordModel(req.body);
     await password.save();
     res.json({
          'status': 'Password Saved'
     });
};

passwordController.updatePassword = async (req, res) => {
     const { email, password, newpassword } = req.body;
     // Valida que no reciba datos vacios
     if (!email || !password || !newpassword) {
          return res.status(400).json({ error: 'Missing parameters' });
     }
     // Busca el usuario en la base de datos por correo electrónico y contraseña
     const user = await passwordModel.findOne({ email: email, password: password });

     if (!user) {
          return res.status(404).json({ error: 'User not found' });
     }

     // Actualiza la contraseña del usuario
     user.password = newpassword;
     await user.save();

     res.json({ status: 'Password Updated' });
};


passwordController.deletePassword = async (req, res) => {
     await passwordModel.findByIdAndDelete(req.params.id);
     res.json({ status: 'Password Deleted' });
};

module.exports = passwordController;