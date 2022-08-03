const modeloFavoritos = require('../models/Favoritos');

const agregarFavoritos = async( articulo ) => {
    const nuevoArticulo = new modeloFavoritos(articulo);
    await nuevoArticulo.save();
    return nuevoArticulo;
};


const eliminarFavoritos = ( _id ) => {
    return modeloFavoritos.findByIdAndDelete( {_id})
}

const todosLosFavoritos = ( id_usuario) => {
    return modeloFavoritos.find( {id_usuario}  )
}


module.exports = {
    agregarFavoritos,
    eliminarFavoritos,
    todosLosFavoritos
};