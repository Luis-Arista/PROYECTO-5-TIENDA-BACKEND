const express = require('express');
const router = express.Router();
const controladorArticulos = require('../Controller/index');
const { todosLosArticulos } = controladorArticulos;

router.get( '/articulos' , async( req , res ) => {
    
    try{
        const listaDeArticulos = await todosLosArticulos({})
        res.status(200).send( listaDeArticulos )
    }catch(Error){
        res.send({
            error: Error.message
        })
    }

})
 
router.get( '/descuentos' , async( req , res ) => {
    try{
        const listaDeArticulos = await todosLosArticulos({ ofertas: true })
        res.status(200).send( listaDeArticulos )
    }catch(Error){
        res.send({
            error: Error.message
        })
    }
})

module.exports = router