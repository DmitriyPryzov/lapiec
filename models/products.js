const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    product: {
        type: String,
        required: true
    },
    count: {
        type: Number,
        required: true
    },
    nameWeight: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        required: true
    },
    provider: {
        type: String,
        required: true
    },
    lastBuyCount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;