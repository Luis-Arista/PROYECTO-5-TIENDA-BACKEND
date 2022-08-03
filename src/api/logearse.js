const express = require('express');
const jwt = require('jsonwebtoken');
const UserService = require('../service/Usuarios');
const modeloDeUsuarios = require('../models/Usuarios');
const autentificacionUsuario = require('../service/auth');
require('dotenv').config()

const router = express.Router();

const userService = new UserService( modeloDeUsuarios );
const authUsuario = new autentificacionUsuario( userService );
const JWT_SECRET = process.env.JWT_SECRET;

router.post( '/' , async( req , res ) =>{
    const { email , contraseña } = req.body

    res.status(200).send({
        email,
        contraseña
    })

 } );


module.exports = router