const jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET;

const authAdministradorMiddleware = ( req , res , next) => {
    const { autorizacion } = req.headers;
    if( !autorizacion ){
        res.status(403).send({
            auth: 'Denegada',
            mensaje: 'Autorisacion Denegada'
        })
    }else {
        const token = autorizacion.split(' ')[1];
        if(!token) {
            res.status(403).send({
                auth: 'Denegada',
                mensaje: 'no se a dado un token'
            })
        }else{
     
                try {
                    const decode = jwt.verify( token , JWT_SECRET);
                    req.user = decode.data;
                    if( decode.data.role === 'Administrador'){
                        next()
                    }else{
                        res.status(403).send({
                            auth: "Acceso denegado",
                            mensaje: 'No estas autorizado para hacer estos cambios'
                        })
                    }
                } catch (error) {
                    return res.status(403).send({
                        error: error.message
                    })
                };
    
        }
    }
    
};

module.exports = authAdministradorMiddleware;