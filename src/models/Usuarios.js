const bcryptjs = require('bcryptjs')
const mongoose = require('mongoose');
const { Schema , model } = mongoose;
const ValidadorUnico = require('mongoose-unique-validator');

const UsuariosEsquema = new Schema({

    nombre : {
        required:[true , 'se require su nombre'],
        type: String,
        lowercase:true   
    },
    apellido:{
        required:[true , 'se require su apellido'],
        type: String,
        lowercase:true   
    },
    email:{
        required:[true , 'se require su email'],
        type: String,
        lowercase:true,
        unique:true  
    },
    contraseña: {
        required:[true , 'se require su contraseña'],
        type: String,
    },
    role:{
        type: String,
        default: 'Cliente'
    },
    favoritos: {
        type: Array,
    },
    carritoCompras: {
        type: Array,

    }

},{
    versionKey:false,
    timestamps: true
});

UsuariosEsquema.pre( 'save' , function(next) {
    const encriptarContraseña = bcryptjs.hashSync( this.contraseña , 12 );
    this.contraseña = encriptarContraseña;
    next()
});

UsuariosEsquema.plugin( ValidadorUnico , { mensaje: 'este email ya fue registrado' } );

const modeloDeUsuarios = model( 'usuarios-tienda' , UsuariosEsquema );

module.exports = modeloDeUsuarios;