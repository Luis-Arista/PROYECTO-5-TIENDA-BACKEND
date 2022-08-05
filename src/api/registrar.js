const express = require('express');
const router = express.Router();
const modeloDeUsuario = require('../models/Usuarios');
const UserService = require('../service/Usuarios');
const jwt = require('jsonwebtoken');
require('dotenv').config()


const userService = new UserService( modeloDeUsuario );
const JWT_SECRET = process.env.JWT_SECRET;


router.post( '/' , async( req , res ) => {
    const body = req.body

    try {
        const Usuario = await userService.crearUsuario( body );
        const usuarioPermisos = {
            ...Usuario,
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

})

module.exports = router