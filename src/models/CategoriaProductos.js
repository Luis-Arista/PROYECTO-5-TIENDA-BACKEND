const mongoose = require('mongoose')
const { Schema , model } = mongoose

const EsquemaCategorias = new Schema({
    categoria: {
        type: String,
        required:[ true , 'se require la categoria']
    }
},{
    versionKey: false,
    timestamps: true
})

const modeloCategoria = model( 'categorias' , EsquemaCategorias )

module.exports = modeloCategoria