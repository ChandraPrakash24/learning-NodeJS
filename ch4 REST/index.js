const express = require('express');
const fs = require('fs');

const app = express();


const products = JSON.parse(fs.readFileSync('./dummyPostREST.json', 'utf-8'));
const product = products.products; //real array of products

app.use(express.json());

// Create POST
app.post('/products', (req, res) => {
    product.push(req.body);
    res.json(req.body);
})

// Read GET 
app.get('/products', (req, res) => {
    res.json(product);
    // res.json(products);
})
app.get('/products/:id', (req, res) => {
    const specificId = +req.params.id;
    // console.log(id);
    const specificProduct = product.find(p=>p.id===specificId);
    res.json(specificProduct);
})
    
//Update PUT (whole overwrite), PATCH (only specific properties changes)
app.put('/products/:id', (req, res) => {
    const specificId = +req.params.id;
    const specificProductIndex = product.findIndex(p=>p.id===specificId);
    product.splice(specificProductIndex, 1, {...req.body, id:specificId});
    res.status(202).json({title:'Upadeted'});
})
app.patch('/products/:id', (req, res) => {
    const specificId = +req.params.id;
    const specificProductIndex = product.findIndex(p => p.id === specificId);
        const productToPatch = product[specificProductIndex];
        const updatedProduct = { ...productToPatch, ...req.body };
        product.splice(specificProductIndex, 1, updatedProduct);
        res.status(202).json({ title: 'Patched' });
});


//Delete DELETE
app.delete('/products/:id', (req, res) => {
    const specificId = +req.params.id;
    const specificProductIndex = product.findIndex(p=>p.id===specificId);
    const productToPatch = product[specificProductIndex];
    product.splice(specificProductIndex, 1,);
    res.status(202).json(productToPatch);
})

app.listen(3000, () => { console.log('server started'); });