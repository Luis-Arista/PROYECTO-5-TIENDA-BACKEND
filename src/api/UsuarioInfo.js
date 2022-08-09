const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/autorisacionUsuario')
const {controladorusuario} = require('../Controller/index')
const {editarFavoritos} = controladorusuario

router.patch( '/:id' , async( req , res ) => {
    const { id } = req.params
    console.log(id)
    const body = req.body
    const usuario = await editarFavoritos( id , body)

    res.send(usuario)
})

router.use(authMiddleware)
router.get( '/usuario/info' , ( req , res ) => {
    const sessionDeUsuario = req.user;
    
    if(!sessionDeUsuario){
        return res.status( 403 ).send({
            mensaje: 'tu no deverias estar aqui'
        })
    }

    res.send({
        nombre: sessionDeUsuario.nombre,
        apellido: sessionDeUsuario.apellido,
        email: sessionDeUsuario.email,
        role: sessionDeUsuario.role,
        id: sessionDeUsuario._id,
        favoritos: sessionDeUsuario.favoritos,
        carritoCompras: sessionDeUsuario.carritoCompras
    })
})

module.exports = router