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
// READ ALL
exports. getProduct = async (req, res) => {
    try {
        const product = await Product.find();
        res.status(201).json(product);
    } catch (error) {
        console.error('Error finding product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
// READ SPECIFIC
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

// exports.getSpecificProduct = async (req, res) => {
//     try {
//         // console.log('Inside getSpecificProduct'); // Add this line for debugging
//         const specificId = req.params.id;
//         // console.log(specificId);
//         const specificProduct = await Product.findById(specificId);

//         if (!specificProduct) {
//             return res.status(404).json({ error: 'Product not found' });
//         }

//         res.json(specificProduct);
//     } catch (err) {
//         console.error('Error finding product:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// };

// UPDATE (REPLACE)
// exports. putSpecificProduct = async (req, res) => {
//     const specificId = +req.params.id;
//     const doc = await Product.findOneAndReplace({_id:id}, req.body, {new:true});
//     res.status(202).json(doc);
// }

exports.putSpecificProduct = async (req, res) => {
    try {
        const specificId = req.params.id;
        const doc = await Product.findOneAndReplace({ _id: specificId }, req.body, {new:true});

        if (!doc) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(202).json(doc);
    } catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


// UPDATE (PATCH)
exports. patchSpecificProduct = async (req, res) => {
    try {
        const specificId = req.params.id;
        const doc = await Product.findOneAndUpdate({ _id: specificId }, req.body, {new:true});

        if (!doc) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(202).json(doc);
    } catch (error) {
        console.error('Error updating Specidic product product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
// DELETE
exports. deleteSpecificProduct = async (req, res) => {
    try {
        const specificId = req.params.id;
        const doc = await Product.findOneAndDelete({ _id: specificId }, req.body);
        res.status(202).json(doc);
    } catch (error) {
        console.error('Error updating Specidic product product:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}