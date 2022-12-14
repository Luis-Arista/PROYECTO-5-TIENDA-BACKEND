const express = require('express');
const router = express.Router();
const rutaRegistrar = require('./registrar')
const rutaLogear = require('./logearse');
const rutaUsuario = require('./UsuarioInfo')
const rutaArticulos = require('./Articulos')
const rutaFavoritos = require('./Favoritos')
const rutaCategoria = require( './Categoria')
const authAdministradorMiddleware = require('../middlewares/autorisacionEdicionArticulos');

router.use( '/login' , rutaLogear );
router.use( '/registrar' , rutaRegistrar  );
router.use( '/favoritos' , rutaFavoritos)
router.use( '/categoria' , rutaCategoria)


router.use( '/usuarios' , rutaUsuario);




//router.use(authAdministradorMiddleware);

router.use( '/articulos' , rutaArticulos);


module.exports = router;