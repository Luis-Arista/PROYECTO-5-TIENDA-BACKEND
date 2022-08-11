const express = require('express');
const router = express.Router();
const controladorCategoria = require('../Controller/index');
const { agregarCategoria } = controladorCategoria

router.post( '/' , async( req , res ) => {
    const body = req.body

    try{
        const nuevaCategoria = await agregarCategoria( body );
        res.status(200).send(nuevaCategoria);
    }catch(error){
        res.status(403).send({
            mensaje: error.message
        });
    };
} );

module.exports = router