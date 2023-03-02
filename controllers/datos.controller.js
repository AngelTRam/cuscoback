const datosModel = require('../models/datos.model');
const datosController = {};
const id = "63fe350784531540f4ba3fd7";

datosController.getDatos = async (req, res) => {
     const datos = await datosModel.find();
     res.json(datos);
};

datosController.resetDatos = async (req, res) => {
     await datosModel.findByIdAndUpdate(id, { $set: { limite: 0 } }, { new: true });
     const datos = await datosModel.find();
     res.json({
          'status': 'Data Reset Success',
          'New limit : ': datos
     });
};

datosController.updateDatos = async (req, res) => {
     const { limite } = req.params;
     const datos = {
          limite: limite,
     };
     await datosModel.findByIdAndUpdate(id, { $set: datos }, { new: true });
     res.json({ status: 'Limite actualizado' });
};

/* datosController.deleteDatos = async (req, res) => {
     await datosModel.findByIdAndDelete(req.params.id);
     res.json({ status: 'Data Deleted' });
}; */


module.exports = datosController;
