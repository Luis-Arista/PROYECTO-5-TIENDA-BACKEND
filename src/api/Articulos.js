const express = require('express');
const router = express.Router();
const controladorArticulos = require('../Controller/index');
const { agregarArticulo , editarArticulo , eliminarArticulo } = controladorArticulos;


router.post( '/' , async( req , res ) => {
    body = req.body;
    const nuevoArticulo = await agregarArticulo( body );
    res.status(200).send( nuevoArticulo );
});

router.put( '/:id' , async( req , res ) => {
    const { id } = req.params;
    const body = req.body;
    const articuloActualizado = await editarArticulo( id , body );

    if(!articuloActualizado){
        res.status(403).send({
            status: 'Error',
            mensaje: 'El articulo con numero de id seleccionado no existe'
        });
    }

    res.status(200).send(articuloActualizado);

});

router.delete( '/:id' , async( req , res ) => {
    const {id} = req.params;
    const articuloEliminado = await eliminarArticulo( id )
    res.status(200).send(articuloEliminado)
})


module.exports = router