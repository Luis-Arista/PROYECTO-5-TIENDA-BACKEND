const express = require('express');
const router = express.Router();
const rutaRegistrar = require('./registrar')
const rutaLogear = require('./logearse');
const rutaUsuario = require('./UsuarioInfo')
const rutaArticulos = require('./Articulos')
const rutalistaArticulos = require('./ListaArticulos')
const rutaFavoritos = require('./Favoritos')
const authAdministradorMiddleware = require('../middlewares/autorisacionEdicionArticulos');

router.use( '/login' , rutaLogear );
router.use( '/registrar' , rutaRegistrar  );
router.use( '/favoritos' , rutaFavoritos)




router.use( '/usuarios' , rutaUsuario);

router.use( '/lista' , rutalistaArticulos);


//router.use(authAdministradorMiddleware);

router.use( '/articulos' , rutaArticulos);


module.exports = router;