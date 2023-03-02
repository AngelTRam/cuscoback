const mongoose = require('mongoose');
const { Schema } = mongoose;

const PasswordSchema = new Schema({
    password:{ type: String, required: true }
}, {
    timestamps: true
});
module.exports = mongoose.model('password', PasswordSchema);