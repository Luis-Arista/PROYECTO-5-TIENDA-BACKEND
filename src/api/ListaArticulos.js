const express = require('express');
const router = express.Router();
const {controladorArticulos} = require('../Controller/index');
const { todosLosArticulos } = controladorArticulos;

router.get( '/articulos' , async( req , res ) => {
    const listaDeArticulos = await todosLosArticulos()
    res.status(200).send( listaDeArticulos )
})
 

module.exports = router