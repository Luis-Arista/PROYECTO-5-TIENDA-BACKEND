const mongoose = require('mongoose');
const { Schema , model } = mongoose;

const EsquemaDeArticulos = new Schema({
    articulo: {
        required: [true , 'nombre de articulo requerido'],
        type: String,
        lowercase: true
    },
    precio:{
        required: [true , 'Se require ingrese precio'],
        type: Number
    },
    precio_con_descuento:{
        required: [true , 'Se require ingrese precio'],
        type: Number
    },
    descripcion: {
        required: [ true , 'Se require descripcion'],
        type: String
    },
    categorias: {
        required: [ true , 'Se require al menos una categoria'],
        type: String
    },
    ofertas:{
        type: Boolean
    },
    imagen: {
        type: String,
        default: 'https://baltrion.es/wp-content/uploads/sin-IMAGEN.jpg'
    }

},{
    versionKey: false,
    timestamps: true
})

const modeloArticulos = model( 'Articulos' , EsquemaDeArticulos );

module.exports = modeloArticulos;