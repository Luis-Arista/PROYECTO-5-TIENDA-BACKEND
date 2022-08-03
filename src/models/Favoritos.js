const mongoose = require('mongoose');
const { Schema , model } = mongoose;

const FavoritosEsquema = new Schema({

    id_articulo: {
        type:String,
        required: [ true , 'se require el id del articulo']
    },
    id_usuario : {
        type:String,
        required: [ true , 'se require el id del usuario']
    },
    articulo: {
        required: [true , 'nombre de articulo requerido'],
        type: String,
        lowercase: true
    },
    precio:{
        required: [true , 'Se require ingrese precio'],
        type: Number
    },
    descripcion: {
        required: [ true , 'Se require descripcion'],
        type: String
    },
    categorias: {
        required: [ true , 'Se require al menos una categoria'],
        type: Array,
        minlength:[ 1 , 'Se require al menos una categoria']
    },
    
},{
    versionKey: false,
    timestamps: true
})

const modeloFavoritos = model ( 'favoritos' , FavoritosEsquema );

module.exports = modeloFavoritos