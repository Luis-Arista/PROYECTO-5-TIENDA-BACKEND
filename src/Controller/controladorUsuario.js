const modeloDeUsuarios = require('../models/Usuarios');

const editarFavoritos = async( _id , favoritos ) => {
    return modeloDeUsuarios.findByIdAndUpdate( { _id } , favoritos , {
        upser: false , 
        new: true
    })
};


module.exports = {
    editarFavoritos
};