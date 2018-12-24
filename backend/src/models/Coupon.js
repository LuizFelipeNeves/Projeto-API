/* 

Tipos de Cupoms:
Politicas de uso de Cupoms:
	maximo de clientes,
	quantidade de usos,
	limite de uso por usario,

*/

const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const CouponSchema = new mongoose.Schema({
    type: { type: String, required: true },
    code: { type: String, required: true },
    description: { type: String, required: true },
    active: { type: Boolean, default: true },
    start_date: { type: String, required: true },
    end_date: { type: String, required: true }, 
    
    max_client: String,
    max_uses: String,
    uses: String,

}, {timestamps: { createdAt: 'created_at' }});

CouponSchema.index({code: 1}, {unique: true})

module.exports = mongoose.model('Coupon', CouponSchema);
