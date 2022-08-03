const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const authGeneralMiddleware = ( req , res , next) => {
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
                    next()
                } catch (error) {
                    return res.status(403).send({
                        error: error.message
                    })
                };
    
        }
    }
    
};

module.exports = authGeneralMiddleware;