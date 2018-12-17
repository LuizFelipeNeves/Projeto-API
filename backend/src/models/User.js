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
     // Dois usuarios podem ter o mesmo numero entretando o mesmo usuario não pode ter o mesmo numero duas vezes.
    phone: [{ number: { type: String } }],
    address_fav: String,
    card_fav: String,
    branch_fav: String    
}, {timestamps: { createdAt: 'created_at' }});

UserSchema.index({email: 1, user: 1}, {unique: true})

module.exports = mongoose.model('User', UserSchema);