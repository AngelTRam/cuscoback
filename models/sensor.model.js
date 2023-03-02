//Estrucura de la coleccion de la base de datos
const mongoose = require('mongoose');
const { Schema } = mongoose;

const SensorSchema = new Schema({
    fecha: { type: String, require: false },
    hora: { type: String, require: false },
    sensor: { type: String, require: false },
}, {
    timestamps: true
});
module.exports = mongoose.model('sensor', SensorSchema);
