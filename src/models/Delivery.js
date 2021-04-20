const mongoose = require('mongoose');

const DeliverySchema = new mongoose.Schema({
    nome: String,
    dataEntrega: Date,
    pontoPartida: String,
    pontoDestino: String,
});

module.exports = mongoose.model('Delivery', DeliverySchema);