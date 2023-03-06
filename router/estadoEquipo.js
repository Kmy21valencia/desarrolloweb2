const { Router } = require('express');
const EstadoEquipo = require('../models/EstadoEquipo');

const router = Router();

router.post('/',async function (req, res){
    try{
        let estadoEquipo = new EstadoEquipo();
        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado;
        estadoEquipo.fechaCreacion =  new Date ();
        estadoEquipo.fechaActualizacion = new Date ();
        
        estadoEquipo = await estadoEquipo.save();
        res.send(estadoEquipo)

    }catch(error){
        console.log(error);
        res.send('Ocurrio un error al crear estado de equipo')
    }

});

router.get('/', async function(req, res){
    try{
        const estadoEquipo = await EstadoEquipo.find();
        res.send(estadoEquipo);
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error')
    }
});

router.put('/:estadoEquipoId', async function(req, res){
    try{
        let estadoEquipo = await EstadoEquipo.findById(req.params.estadoEquipoId);
        if(!estadoEquipo){
            return res.send('no existe estado equipo');
        }


        estadoEquipo.nombre = req.body.nombre;
        estadoEquipo.estado = req.body.estado;
        estadoEquipo.fechaActualizacion = new Date ();
        
        estadoEquipo = await estadoEquipo.save();
        res.send(estadoEquipo)

    }catch(error){
        console.log(error);
        res.send('Ocurrio un error al actualizar Estado  equipo')
    }
});

module.exports = router;