const { axios } = require('axios');
const Delivery = require('../models/Delivery');

module.exports = {
  
  //Listar todas as entregas
    
    async index( request, response) {
        const entregas = await Delivery.find();

        return response.json(entregas);
    },
  
  
  
    async store(request, response) {
      
        const { nome, dataEntrega, pontoPartida, pontoDestino } = request.body;
        console.log("será?")
        delivery = await Delivery.create({
            nome,
            dataEntrega,
            pontoPartida,
            pontoDestino,
        });

        return response.json(delivery);
  }
}