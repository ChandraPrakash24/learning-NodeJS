const express = require('express');
const fs = require('fs');

const app = express();

const products = JSON.parse(fs.readFileSync('./dummyPostREST.json', 'utf-8'));
const product = products.products; //real array of products

app.use(express.json());

const postProducts = (req, res) => {
    product.push(req.body);
    res.json(req.body);
}
const getProduct = (req, res) => {
    res.json(product);
}
const getSpecificProduct = (req, res) => {
    const specificId = +req.params.id;
    // console.log(id);
    const specificProduct = product.find(p=>p.id===specificId);
    res.json(specificProduct);
}
const puSpecificProduct = (req, res) => {
    const specificId = +req.params.id;
    const specificProductIndex = product.findIndex(p=>p.id===specificId);
    product.splice(specificProductIndex, 1, {...req.body, id:specificId});
    res.status(202).json({title:'Upadeted'});
}
const patchSpecificProduct = (req, res) => {
    const specificId = +req.params.id;
    const specificProductIndex = product.findIndex(p => p.id === specificId);
        const productToPatch = product[specificProductIndex];
        const updatedProduct = { ...productToPatch, ...req.body };
        product.splice(specificProductIndex, 1, updatedProduct);
        res.status(202).json({ title: 'Patched' });
}
const deleteSpecificProduct =  (req, res) => {
    const specificId = +req.params.id;
    const specificProductIndex = product.findIndex(p=>p.id===specificId);
    const productToPatch = product[specificProductIndex];
    product.splice(specificProductIndex, 1,);
    res.status(202).json(productToPatch);
}

// Create POST
app.post('/products', postProducts);
// Read GET 
app.get('/products', getProduct)
app.get('/products/:id', getSpecificProduct)
//Update PUT (whole overwrite), PATCH (only specific properties changes)
app.put('/products/:id', puSpecificProduct)
app.patch('/products/:id', patchSpecificProduct);
//Delete DELETE
app.delete('/products/:id', deleteSpecificProduct)

app.listen(3000, () => { console.log('server started'); });