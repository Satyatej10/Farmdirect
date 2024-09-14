// model.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    grams: String
});

module.exports = mongoose.model('Image', imageSchema);
