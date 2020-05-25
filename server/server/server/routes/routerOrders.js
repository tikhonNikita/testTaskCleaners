const express = require('express');
const { ordersController } = require('../controllers');
const { ordersMiddleware } = require('../middleware');

const routerDryers = express.Router();


routerDryers.get('/orders', ordersController.getAllOrders);

routerDryers.get('/myOrders/:userId', ordersController.getAllOrdersOfUser);

routerDryers.get('/getOrder/:orderId', ordersController.getOrderById);

routerDryers.post('/createOrder', ordersMiddleware.orderCreateValidation, ordersController.createOrder);

routerDryers.put('/editOrder', ordersMiddleware.orderUpdateValidation, ordersController.updateOrder);

routerDryers.delete('/deleteOrder', ordersController.deleteOrder);

module.exports = routerDryers;
