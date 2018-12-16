const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);

const UserSchema = new mongoose.Schema({
    id_user_role: { type: Number, default: '0'},
    email: { type: String, index: true, unique: true, required: true, trim: true },
    password: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender: { type: String, required: true },
    date_birth: { type: String, required: true },
    cpf:{ type: String, index: true, unique: true, required: true, trim: true },
     // Dois usuarios podem ter o mesmo numero entretando o mesmo usuario não pode ter o mesmo numero duas vezes.
     // Array
    phone: [{ number: { type: String, unique: true } }],
    address_fav: String,
    card_fav: String,
    branch_fav: String    
}, {timestamps: { createdAt: 'created_at' }});

module.exports = mongoose.model('User', UserSchema);

// Criar Rota phone