const express = require('express');
const router = express.Router();
const {controladorArticulos} = require('../Controller/index');
const {todosLosArticulos , buscarId , agregarArticulo , editarArticulo , eliminarArticulo } = controladorArticulos;
const multer = require('multer')
const upload = multer({dest:'a'})

router.post( '/lista' , async( req , res) => {
    const parametro = req.body

    try{
        const lista = await todosLosArticulos( parametro )
        res.status(200).send( lista )


    }catch(error){
        res.status(403).send({
            mensaje: error.message
        })
    }

})

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

router.post( '/' , upload.single('imagen') , async( req , res ) => {
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