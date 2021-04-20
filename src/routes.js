const { Router } = require('express');
const DeliveryController = require('./controllers/DeliveryController.js');

const routes = Router();

routes.get('/entregas', DeliveryController.index);
routes.post('/cadastro', DeliveryController.store);

module.exports = routes;
