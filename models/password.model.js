const mongoose = require('mongoose');
const { Schema } = mongoose;

const Password = new Schema({
    email:{ type: String, required: true },
    password:{ type: String, required: true },
    tipo:{ type: String, required: true }
}, {
    timestamps: true
});
module.exports = mongoose.model('password', Password);