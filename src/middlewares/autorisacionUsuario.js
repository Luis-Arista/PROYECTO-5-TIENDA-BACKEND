const jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = ( req , res , next) => {
    const { autorizacion } = req.headers;
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
                const url = req.url.replace(/\//g , ':').slice(1)
                if( req.user.permisos.indexOf(url) === -1 ){
                    return res.status(403).send({
                        error: 'tu no pasas'
                    })

                }
                next()
            } catch (error) {
                return res.starus(403).send({
                    error: error.message
                })
            };

    }
};

module.exports = authMiddleware;