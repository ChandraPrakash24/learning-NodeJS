const express = require('express');
const app = express();
const productController = require('./controller/product.js');

app.use(express.json());  //body-parser

app.post('/products', productController.postProducts);
app.get('/products', productController.getProduct)
app.get('/products/:id', productController.getSpecificProduct)
app.put('/products/:id', productController.putSpecificProduct)
app.patch('/products/:id', productController.patchSpecificProduct);
app.delete('/products/:id', productController.deleteSpecificProduct)

app.listen(3000, () => { console.log('server started'); });