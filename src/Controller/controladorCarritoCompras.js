const modeloCarritoCompras = require('../models/CarritoCompras');

const agregarCarrito = async( articulo ) => {
    const nuevoArticulo = new modeloCarritoCompras(articulo);
    await nuevoArticulo.save();
    return nuevoArticulo;
};

const editarCarrito = ( _id , articuloActualizado ) => {
    return modeloCarritoCompras.findByIdAndUpdate( {_id} , articuloActualizado, {
        upser: false,
        new: true
    } )
}

const eliminarCarrito = ( _id ) => {
    return modeloCarritoCompras.findByIdAndDelete( {_id})
}

const todosLosArticulosdelCarrito = ( id_usuario) => {
    return modeloCarritoCompras.find( {id_usuario}  )
}


module.exports = {
    agregarCarrito,
    editarCarrito,
    eliminarCarrito,
    todosLosArticulosdelCarrito,
};