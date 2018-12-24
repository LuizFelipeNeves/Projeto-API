const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const BranchSchema = new mongoose.Schema({
    cnpj: { type: String, required: true },
    email: { type: String, required: true },
    address: {
      	city: { type: String, required: true },
        postal_code: { type: String, required: true },
        address_num: { type: String, required: true },
        address_ref: { type: String, required: true },
        state: { type: String, required: true },
    },
    phone: [{ number: { type: String } }],
    max_range: String,
}, {timestamps: { createdAt: 'created_at' }});

BranchSchema.index({email: 1, cnpj: 1}, {unique: true})

module.exports = mongoose.model('Branch', BranchSchema);