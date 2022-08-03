const express = require('express');
const router = express.Router();
const {controladorCarritoCompras} = require('../Controller/index');
const { agregarCarrito , editarCarrito , eliminarCarrito , todosLosArticulosdelCarrito } = controladorCarritoCompras;

router.post( '/' , async( req , res ) => {
    const body = req.body;
    const id_usuario = body.id_usuario;
    const id_articulo = body.id_articulo
    const articuloExistente = await todosLosArticulosdelCarrito( id_usuario )
    const existe = articuloExistente.filter( ( item ) => {
        return item.id_articulo === id_articulo
    })
    if( existe.length === 0){
        const nuevoArticulo = await agregarCarrito( body );
        res.status(200).send( nuevoArticulo );
    } else {
        res.status(200).send( {
            mensaje: 'ya existe este articulo en el carrito'
        } )
    }
});

router.patch( '/:id' , async( req , res ) => {
    const { id } = req.params;
    const body = req.body;
    const articuloActualizado = await editarCarrito( id , body );
    res.status(200).send(articuloActualizado);

});

router.delete( '/:id' , async( req , res ) => {
    const {id} = req.params;
    const articuloEliminado = await eliminarCarrito( id )
    res.status(200).send(articuloEliminado)
})

router.get( '/' , async( req , res ) => {
     id_usuario  = req.body.id_usuario;
     if(id_usuario){
        const listaDeArticulos = await todosLosArticulosdelCarrito( id_usuario )
        res.status(200).send( listaDeArticulos )  
     }else{
        res.status(403). send({
            mensaje: 'No hay usuario'
        })
     }
     
})

module.exports = router