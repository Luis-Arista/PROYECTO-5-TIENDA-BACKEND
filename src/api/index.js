const express = require('express');
const router = express.Router();
const rutaRegistrar = require('./registrar')
const rutaLogear = require('./logearse');
const rutaUsuario = require('./UsuarioInfo')
const rutaArticulos = require('./Articulos')
const rutalistaArticulos = require('./ListaArticulos')
const rutaCarritoCompras = require('./CarritoCompras')
const rutaFavoritos = require('./Favoritos')
const authGeneralMiddleware = require('../middlewares/autorisacionGeneral');
const authAdministradorMiddleware = require('../middlewares/autorisacionEdicionArticulos');
const { route } = require('./registrar');

router.use( '/registrar' , rutaRegistrar  )

router.use( '/login' , rutaLogear )


router.use( '/usuarios' , rutaUsuario)

router.use( '/lista' , rutalistaArticulos)


router.use(authGeneralMiddleware)

router.use( '/carrito' , rutaCarritoCompras)
router.use( '/favoritos' , rutaFavoritos)

router.use(authAdministradorMiddleware)

router.use( '/articulos' , rutaArticulos)

module.exports = router