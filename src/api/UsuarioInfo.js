const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/autorisacionUsuario')

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
        id: sessionDeUsuario._id
    })
})

module.exports = router