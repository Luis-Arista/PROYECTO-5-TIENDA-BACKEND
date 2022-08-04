const modeloArticulos = require('../models/ArticulosTienda');

const agregarArticulo = async( articulo ) => {
    const nuevoArticulo = new modeloArticulos(articulo);
    await nuevoArticulo.save();
    return nuevoArticulo;
};

const editarArticulo = ( _id , articuloActualizado ) => {
    return modeloArticulos.findByIdAndUpdate( {_id} , articuloActualizado, {
        upser: false,
        new: true
    } )
}

const eliminarArticulo = ( _id ) => {
    return modeloArticulos.findByIdAndDelete( {_id})
}

const todosLosArticulos = ( parametro ) => {
    return modeloArticulos.find(parametro)
}

module.exports = {
    agregarArticulo,
    editarArticulo,
    eliminarArticulo,
    todosLosArticulos
};