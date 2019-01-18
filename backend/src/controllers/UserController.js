const User = require('../models/User');

module.exports = {
    async user_list(req, res) {
        const users = await User.find({}).sort('-createAt') 
        return res.json(users);
    },
    async user_getbyid(req, res){
        try{
            const user = await User.findById(req.params.id);
            return res.json(user);
        }
        catch(e){ return res.json(e); }
    },
    async user_create(req, res){
        try{ 
            const user = await User.create(req.body);
            // avisa que foi criado um usuario todo o resto da aplicacao
            req.io.emit('user_create', user);
            return res.json(user);
        }
        catch(e){ return res.json(e); }
    },
    // how update the version key?.
    async user_update(req, res){
        try{
            /* Primeiro Metodo retorna os dados atualizados. */
            const user = await User.findById(req.params.id);
            user.set(req.body).save();
            req.io.emit('user_update', user);
            return res.json(user);

             /* Segundo Metodo nao retorna os dados atualizados
             const user = await User.updateOne({ _id: req.params.id }, {$set: req.body});
             return res.json(user);
             */

        }
        catch(e){ return res.json(500); }     
    },
    async user_delete(req, res){
        try{
            const user = await User.deleteOne({ _id: req.params.id});
            req.io.emit('user_delete', user);
            return res.json(200);
        }
        catch(e){ return res.json(500); }
    },


/* Terminar */

    async phone_list(req, res){
        try{
            const user = await User.findById(req.params.id);
            req.io.emit('phone_list', users.phone);
            return res.json(users.phone);
        }
        // Array vazio retorna como erro...
        catch(e){ return res.json(e); }
    },
    async phone_create(req, res){
        try{ 
            const user = await User.updateOne({ _id: req.params.id }, { $push: {phone: {number: req.params.number}} });
            return res.json(200);
        }
        catch(e){ return res.json(500); }
    },
    async phone_update(req, res){
        try{
            /*
                Atualizar elemento do Array
            */
        }
        catch(e){ return res.json(500); }     
    },
    async phone_delete(req, res){
        try{
            /*
                Remover elemento do Array
            */
        }
        catch(e){ return res.json(500); }
    },
};
