const mongoose = require('mongoose');
const { Schema } = mongoose;

const DatosSchema = new Schema({
    limite:{ type: Number, require: false }
}, {
    timestamps: true
});
module.exports = mongoose.model('datos', DatosSchema);