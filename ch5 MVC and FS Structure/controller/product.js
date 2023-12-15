const express = require('express');
const fs = require('fs');
const products = JSON.parse(fs.readFileSync('./dummyPostREST.json', 'utf-8'));
const product = products.products; //real array of products

exports. postProducts = (req, res) => {
    product.push(req.body);
    res.json(req.body);
}
exports. getProduct = (req, res) => {
    res.json(product);
}
exports. getSpecificProduct = (req, res) => {
    const specificId = +req.params.id;
    // console.log(id);
    const specificProduct = product.find(p=>p.id===specificId);
    res.json(specificProduct);
}
exports. putSpecificProduct = (req, res) => {
    const specificId = +req.params.id;
    const specificProductIndex = product.findIndex(p=>p.id===specificId);
    product.splice(specificProductIndex, 1, {...req.body, id:specificId});
    res.status(202).json({title:'Upadeted'});
}
exports. patchSpecificProduct = (req, res) => {
    const specificId = +req.params.id;
    const specificProductIndex = product.findIndex(p => p.id === specificId);
        const productToPatch = product[specificProductIndex];
        const updatedProduct = { ...productToPatch, ...req.body };
        product.splice(specificProductIndex, 1, updatedProduct);
        res.status(202).json({ title: 'Patched' });
}
exports. deleteSpecificProduct =  (req, res) => {
    const specificId = +req.params.id;
    const specificProductIndex = product.findIndex(p=>p.id===specificId);
    const productToPatch = product[specificProductIndex];
    product.splice(specificProductIndex, 1,);
    res.status(202).json(productToPatch);
}