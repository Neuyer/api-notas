const mongoose = require('mongoose');

const ADMSchema = new mongoose.Schema({
    nome: String,
    login: String,
    pswd: String,
});

module.exports = mongoose.model('Admins', ADMSchema);