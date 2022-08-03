const bcrypt = require('bcryptjs');

const autentificacionUsuario = class {
    constructor( UserService ){
        this.userService = UserService
    };

    async login( email , contraseña ){
        const usuario = await this.userService.getByEmail( email );
        if(!usuario){
            throw new Error( 'El usuario no Existe' );
        } else if( await bcrypt.compare( contraseña , usuario.contraseña ) || !usuario ){
            usuario.contraseña = undefined
            return usuario.toObject()
        } else {
            throw new Error('Autorisacion denegada, correo o contraseña Erroneos')
        };
    };
    
};

module.exports = autentificacionUsuario