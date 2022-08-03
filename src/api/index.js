const express = require('express');
const router = express.Router();
const rutaRegistrar = require('./registrar')
const rutaLogear = require('./logearse');
const rutaUsuario = require('./UsuarioInfo')
const rutaArticulos = require('./Articulos')
const rutalistaArticulos = require('./ListaArticulos')
const authAdministradorMiddleware = require('../middlewares/autorisacionEdicionArticulos');

router.use( '/' , (req , res) => {
    res.send('seccion api')
})

router.use( '/registrar' , rutaRegistrar  );

router.use( '/login' , rutaLogear );


router.use( '/usuarios' , rutaUsuario);

router.use( '/lista' , rutalistaArticulos);


router.use(authAdministradorMiddleware);

router.use( '/articulos' , rutaArticulos);

module.exports = router;