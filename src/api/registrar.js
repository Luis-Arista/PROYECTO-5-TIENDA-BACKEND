const express = require('express');
const router = express.Router();
const modeloDeUsuario = require('../models/Usuarios');
const UserService = require('../service/Usuarios');

const userService = new UserService( modeloDeUsuario );

router.post( '/' , async( req , res ) => {
    const body = req.body
    const Usuario = await userService.crearUsuario( body );
    res.status( 201 ).send( Usuario );
})

module.exports = router