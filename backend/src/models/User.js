const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const UserSchema = new mongoose.Schema({
    id_user_role: { type: Number, default: '0'},
    email: { type: String, required: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String, required: true },
    date_birth: { type: String, required: true },
	cpf:{ type: String, required: true},
	// Dois usuarios podem ter o mesmo numero,
	// entretando o mesmo usuario não pode ter o mesmo numero duas vezes.
    phone: [{ number: { type: String } }],
    address: [{ 
		city: { type: String },
		postal_code: { type: String },
		address_num: { type: String },
		address_ref: { type: String },
		state: { type: String },
	}], 
	card: [{ 
		number: { type: String },
		type: { type: String },
		exp_date: { type: String },
		name: { type: String },
		billing_address:{
			city: { type: String },
			postal_code: { type: String },
			address_num: { type: String },
			address_ref: { type: String },
			state: { type: String },
		}
	}],
}, {timestamps: { createdAt: 'created_at' }});

UserSchema.index({email: 1, cpf: 1}, {unique: true})

module.exports = mongoose.model('User', UserSchema);