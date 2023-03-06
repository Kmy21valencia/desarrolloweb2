const { Router } = require('express');

const TipoEquipo = require('../models/TipoEquipo');


const router = Router();

router.post('/',async function (req, res){
    try{
        let tipoEquipo = TipoEquipo();
        tipoEquipo.nombre = req.body.nombre;
        tipoEquipo.estado = req.body.estado;
        tipoEquipo.fechaCreacion =  new Date ();
        tipoEquipo.fechaActualizacion = new Date ();
        
        tipoEquipo = await tipoEquipo.save();
        res.send(tipoEquipo)

    }catch(error){
        console.log(error);
        res.send('Ocurrio un error al crear tipo de equipo')
    }

});

router.get('/', async function(req, res){
    try{
        const tipoEquipo = await TipoEquipo.find();
        res.send(tipoEquipo);
    }catch(error){
        console.log(error);
        res.send('Ocurrio un error')
    }
});

router.put('/:tipoEquipoId', async function(req, res){
    try{
        let tipoEquipo = await TipoEquipo.findById(req.params.tipoEquipoId);
        if(!tipoEquipo){
            return res.send('no existe tipo equipo');
        }


        tipoEquipo.nombre = req.body.nombre;
        tipoEquipo.estado = req.body.estado;
        tipoEquipo.fechaActualizacion = new Date ();
        
        tipoEquipo = await tipoEquipo.save();
        res.send(tipoEquipo)

    }catch(error){
        console.log(error);
        res.send('Ocurrio un error al actualizar tipo de equipo')
    }

});

module.exports = router;