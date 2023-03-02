const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContadorSchema = new Schema({
    contador: { type: String, require: true }
}, {
    timestamps: true
});
module.exports = mongoose.model('contador', ContadorSchema);