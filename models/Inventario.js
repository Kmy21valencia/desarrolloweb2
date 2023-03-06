const {Schema, model, trusted} = require('mongoose');

const InventarioSchema = Schema({
    serial: {
        type: String,
        require:true,
        unique: true
    },

    modelo: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    },
    fechaCompra: {
        type: Date,
        requerid: true
    },
    precio: {
        type: Number,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: false
    },
    marca: {
        type: Schema.Types.ObjectId,
        ref: 'Marca',
        required: true

    },
    tipoEquipo: {
        type: Schema.Types.ObjectId,
        ref: 'TipoEquipo',
        required: true
    },
    estadoEquipo: {
        type: Schema.Types.ObjectId,
        ref:'EstadoEquipo',
        required:true
    },
    fechaCreacion: {
        type: Date,
        requerid: true

    },
    fechaActualiacion: {
        type: Date,
        requerid: true
    }
});

module.exports = model('Inventario', InventarioSchema);