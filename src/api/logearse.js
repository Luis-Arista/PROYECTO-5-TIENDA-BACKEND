const jwt = require('jsonwebtoken');
const UserService = require('../service/Usuarios');
const modeloDeUsuarios = require('../models/Usuarios');
const autentificacionUsuario = require('../service/auth');
const express = require('express');
require('dotenv').config()

const router = express.Router();

const userService = new UserService( modeloDeUsuarios );
const authUsuario = new autentificacionUsuario( userService );
const JWT_SECRET = process.env.JWT_SECRET;

router.post( '/' , async( req , res ) =>{
    const { email , contraseña } = req.body

    try {
        const usuario = await authUsuario.login( email , contraseña);
        const usuarioPermisos = {
            ...usuario,
            permisos: [ 'usuario:info' ]
        };
        const token = jwt.sign({
            data: usuarioPermisos
        } , JWT_SECRET , {
            expiresIn: 60 * 60
        });
        res.status( 200 ).send({
            auth:true,
            token
        });
    } catch (error) {
        res.status(401).send({
            mensaje: error.message
        })
    }

 } );


module.exports = router