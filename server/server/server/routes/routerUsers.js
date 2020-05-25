const express = require('express');
const { userController } = require('../controllers');
const { userMiddleware } = require('../middleware');


const routerUsers = express.Router();


routerUsers.get('/getUsers', userController.getAllUsers);

routerUsers.post('/login', userController.userAuthorization);

routerUsers.post('/signup', userMiddleware.userCreateValidation, userController.createUser);

routerUsers.post('/forgotPassword', userController.sendEmailPasswordRestore);

routerUsers.post('/resetPassword', userController.passwordRestore);

routerUsers.delete('/deleteUser/:userId', userController.deleteUser);

module.exports = routerUsers;
