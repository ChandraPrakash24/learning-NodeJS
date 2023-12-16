const express = require('express');
const userController = require('../controller/user.js');
const routes = express.Router();

routes
    .post('/', userController.postusers)
    .get('/', userController.getuser)
    .get('/:id', userController.getSpecificuser)
    .put('/:id', userController.putSpecificuser)
    .patch('/:id', userController.patchSpecificuser)
    .delete('/:id', userController.deleteSpecificuser)

exports.routes = routes;