const { Router } = require('express');
const Usuario = require('../models/Usuario');


const router = Router();

router.post('/',async function (req, res){
    try{
        const existeUsuario = await Usuario.findOne ({email:req.body.email})
        if(existeUsuario) {
            return res.send('Email ya existe')
        }
        console.log(req.body);
        let usuario = new Usuario();
        usuario.nombre = req.body.nombre;
        usuario.email = req.body.email;
        usuario.estado = req.body.estado;
        usuario.fechaCreacion = new Date();
        usuario.fechaActualizacion = new Date();

        usuario = await usuario.save();

        res.send(usuario);
        console.log(usuario);
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error al crear usuario')
    }

});

router.get('/',  async function(req, res){
    try{
        const usuario = await Usuario.find();
        res.send(usuario);
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error')
    }
});

router.put('/:usuarioId', async function(req, res){
    try{
        let usuario = await Usuario.findById(req.params.usuarioId);
        if(!usuario) {
            return res.send('Usuario no existe')
        }

        const existeUsuario = await Usuario.
        findOne({email: req.body.email, _id:{ $ne: usuario._id } });
        if(existeUsuario) {
            return res.send('Email ya existe');
        }

        usuario.nombre = req.body.nombre;
        usuario.email = req.body.email;
        usuario.estado = req.body.estado;
        usuario.fechaCreacion = new Date();
        usuario.fechaActualizacion = new Date();

        usuario = await usuario.save();

        res.send(usuario);
        console.log(usuario);
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error al actualizar usuario')
    }
});

module.exports = router;