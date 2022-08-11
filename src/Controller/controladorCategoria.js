const modeloCategoria = require('../models/CategoriaProductos');

const agregarCategoria = async( categoria ) => {
    const nuvaCategoria = new modeloCategoria( categoria );
    await nuvaCategoria.save();
    return nuvaCategoria;
};

const buscarCategoria = ( parametro ) => {
    return modeloCategoria.find( parametro )
}

module.exports = {
    agregarCategoria,
    buscarCategoria
}