const express = require('express');
const router = express.Router();
const {controladorFavoritos} = require('../Controller/index');
const { agregarFavoritos , eliminarFavoritos , todosLosFavoritos } = controladorFavoritos;

router.post( '/' , async( req , res ) => {
    const body = req.body;
    const id_usuario = body.id_usuario;
    const id_articulo = body.id_articulo
    const articuloExistente = await todosLosFavoritos( id_usuario )
    const existe = articuloExistente.filter( ( item ) => {
        return item.id_articulo === id_articulo
    })
    if( existe.length === 0){
        const nuevoArticulo = await agregarFavoritos( body );
        res.status(200).send( nuevoArticulo );
    } else {
        res.status(200).send( {
            mensaje: 'ya existe este articulo en los favoritos'
        } )
    }
});


router.delete( '/:id' , async( req , res ) => {
    const {id} = req.params;
    const articuloEliminado = await eliminarFavoritos( id )
    res.status(200).send(articuloEliminado)
})

router.get( '/' , async( req , res ) => {
     id_usuario  = req.body.id_usuario;
     if(id_usuario){
        const listaDeArticulos = await todosLosFavoritos( id_usuario )
        res.status(200).send( listaDeArticulos )  
     }else{
        res.status(403). send({
            mensaje: 'No hay usuario'
        })
     }
     
})

module.exports = router