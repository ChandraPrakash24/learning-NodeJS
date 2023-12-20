const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    discountPercentage: {
        type: Number,
        min: [0, 'wrong min'],
        max: [50, 'wrong max']
    },
    rating: {
        type: Number,
        min: [0, 'wrong min'],
        max: [5, 'wrong max'],
        default:0
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String
    },
    images: {
        type: [String],
        default: []
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };