/*

Status: 

Total = soma(content.amount)
Totalpago = soma(payment.value) enquanto status for concluido,
coupon_use: { type: Boolean, default: false },

eliminado o uso de cheque ou armazenar  as informacoes dele.
	nome, numero, valor, data, banco

identificar pedidos pagos, caso o valor do pedido seja igual a soma do valor pago.

*/

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    id_client: { type: String, required: true },
    status: { type: Number, default: '0'},
    id_branch: { type: String},	
    payment: [{ 
		status: { type: String },
		value: { type: String },
		type: { type: String },
		operator: { type: String },
		//XXXXXXXX RETORNO DO GETWAY XXXXXXXXXXX 
	}], 
	content: [{
		name: { type: String },
		price: { type: String },
		amount: { type: String },
	}],
    address_pick_up: {
      	city: { type: String },
		postal_code: { type: String },
		address_num: { type: String },
		address_ref: { type: String },
		state: { type: String },
    },
    address_shipping: {
      	city: { type: String },
		postal_code: { type: String },
		address_num: { type: String },
		address_ref: { type: String },
		state: { type: String },
    },
    address_branch: {
      	city: { type: String },
		postal_code: { type: String },
		address_num: { type: String },
		address_ref: { type: String },
		state: { type: String },
    },
    shippings: [{
		type: { type: String },
		status: { type: String },  
		driver_name: { type: String }, 
		receiver_name: { type: String },  
		receiver_cpf: { type: String }, 
		note: { type: String }, 
		address: {
			city: { type: String },
			postal_code: { type: String },
			address_num: { type: String },
			address_ref: { type: String },
			state: { type: String },
		}
    }],
}, {timestamps: { createdAt: 'created_at' }});

module.exports = mongoose.model('Order', OrderSchema);