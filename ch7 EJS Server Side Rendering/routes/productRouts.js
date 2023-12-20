const express = require('express');
const productController = require('../controller/product.js');
const routes = express.Router();

routes
    .post('/', productController.postProducts)
    .get('/', productController.getProduct)
    .get('/ssr', productController.getAllProductSSR)
    .get('/:id', productController.getSpecificProduct)
    .put('/:id', productController.putSpecificProduct)
    .patch('/:id', productController.patchSpecificProduct)
    .delete('/:id', productController.deleteSpecificProduct)
    
exports.routes = routes;