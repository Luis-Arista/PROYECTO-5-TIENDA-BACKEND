const UserService = class {
    constructor( modeloDeUsuario ){
        this.Modelo = modeloDeUsuario;
    };

    getByEmail( email ) {
        return this.Modelo.findOne( { email } );
    };

    async crearUsuario( userData ) {
        const nuevoUsuario = this.Modelo( userData );
        await nuevoUsuario.save();
        nuevoUsuario.contraseña = undefined
        return nuevoUsuario.toObject()
    };

};

module.exports = UserService