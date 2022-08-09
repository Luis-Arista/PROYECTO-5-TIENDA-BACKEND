const express = require('express');
const router = express.Router();
const {controladorArticulos} = require('../Controller/index');
const { buscarId } = controladorArticulos;

router.post( '/' , async( req , res ) => {
     const {id} = req.body
    try{
        const articulo = await buscarId( id )
        res.status(200).send( articulo )
    }catch(Error){
        res.send({
            error: Error.message
        })
    }

})

module.exports = router