const mongoose = require('mongoose');

const ClothesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
}, {timestamps: { createdAt: 'created_at' }});

module.exports = mongoose.model('Clothes', ClothesSchema);