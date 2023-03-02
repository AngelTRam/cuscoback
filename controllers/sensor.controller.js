//Aqui se encuentran todos los metodos de la coleccion users
const sensorModel = require('../models/sensor.model');
const sensorController = {};

sensorController.getSensor = async (req, res) => {
     const sensor = await sensorModel.find();
     res.json(sensor);
};

sensorController.addSensor = async (req, res) => {
     const sensor = new sensorModel(req.body);
     await sensor.save();
     res.json({
          'status': 'Sensor Saved'
     });
};

sensorController.updateSensor = async (req, res) => {
     const { id } = req.params;
     const sensor = {
          fecha: req.body.fecha,
          hora: req.body.hora,
          sensor: req.body.sensor
     };
     await sensorModel.findByIdAndUpdate(id, { $set: sensor }, { new: true });
     res.json({ status: 'Sensor Updated' });
};




sensorController.deleteSensor = async (req, res) => {
     await sensorModel.findByIdAndDelete(req.params.id);
     res.json({ status: 'Sensor Deleted' });
}



module.exports = sensorController;