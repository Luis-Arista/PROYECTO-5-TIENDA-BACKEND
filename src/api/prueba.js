const express = require('express');
const router = express.Router();
const {controladorArticulos} = require('../Controller/index');
const { buscarId  } = controladorArticulos;



router.get( '/:id' , async( req , res ) => {
    const {id} = req.params
    try{
        const articulo = await buscarId( id )
        res.status(200).send(articulo)
    }catch(error){
        res.send({
            error,
            mensaje: error.message
        })
    }
})




module.exports = router