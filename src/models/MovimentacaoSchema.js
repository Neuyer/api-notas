const mongoose = require('mongoose');

const MovimentacaoSchema = new mongoose.Schema({
    admId: String,
    quantidade: Number,
    fornecedor: String,
    data: Date,
    valor: Number,
    isPago: Boolean,
});

module.exports = mongoose.model('Movimentacoes', MovimentacaoSchema);