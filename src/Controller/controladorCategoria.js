const modeloCategoria = require('../models/CategoriaProductos');

const agregarCategoria = async( categoria ) => {
    const nuvaCategoria = new modeloCategoria( categoria );
    await nuvaCategoria.save();
    return nuvaCategoria;
};

module.exports = {
    agregarCategoria
}