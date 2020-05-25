const express = require('express');
const { servicesController } = require('../controllers');
const { servicesMiddleware } = require('../middleware');

const routerServices = express.Router();


routerServices.get('/services', servicesController.getAllServices);

routerServices.get('/getDryersService/:dryerId', servicesController.getAllServicesOfDryers);

routerServices.post('/createService', servicesMiddleware.serviceCreateValidation, servicesController.createService);

routerServices.put('/editService', servicesMiddleware.serviceUpdateValidation, servicesController.updateService);

routerServices.delete('/deleteService', servicesController.deleteService);

module.exports = routerServices;
