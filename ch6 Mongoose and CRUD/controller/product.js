const express = require('express');
const model = require('../models/product');
const Product = model.Product;

// CREATE
exports.postProducts = async  (req, res) => {
    
    const product = new Product(req.body); // GET DATA FROM BODY
    // product.title = "iPhone 9"; // HARD CODED
    // product.description = "An apple mobile which is nothing like apple";
    // product.price = 549;
    // product.rating = 4.69;
    // product.brand = "Apple";
    // product.category = "smartphones";

    try {
        const savedProduct = await product.save();
        console.log('Product saved:', savedProduct);
        res.status(201).json(savedProduct);
    } catch (error) {
        console.error('Error saving product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}
// READ
exports. getProduct = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(201).json(product);
    } catch (error) {
        console.error('Error finding product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
exports. getSpecificProduct = async (req, res) => {
    try{
        const specificId = req.params.id;
        const specificProduct = await Product.findById(specificId);

        if (!specificProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json(specificProduct);
    }catch (err) {
        console.error('Error finding product:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
// UPDATE
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
// DELETE
exports. deleteSpecificProduct =  (req, res) => {
    const specificId = +req.params.id;
    const specificProductIndex = product.findIndex(p=>p.id===specificId);
    const productToPatch = product[specificProductIndex];
    product.splice(specificProductIndex, 1,);
    res.status(202).json(productToPatch);
}