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
     const { id } = req.params;
     const password = {
          password: req.body.password,

     };
     await passwordModel.findByIdAndUpdate(id, { $set: password }, { new: true });
     res.json({ status: 'Password Updated' });
};


passwordController.deletePassword = async (req, res) => {
     await passwordModel.findByIdAndDelete(req.params.id);
     res.json({ status: 'Password Deleted' });
};

module.exports = passwordController;