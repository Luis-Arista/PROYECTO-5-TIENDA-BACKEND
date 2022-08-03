const mongoose = require('mongoose');
require('dotenv').config();

const URL_MONGODB = process.env.URL_MONGODB;


mongoose.connect( URL_MONGODB , {} , () => {
    console.log('-------------------------------------------------');
    console.log('Coneccion con base de datos establecida');
    console.log('Lista para usar :)');
});

mongoose.connection.on( 'open' , () => {
    console.log('-------------------------------------------------');
    console.log('Conectando a la Base de datos');
    console.log('Cargando...');
});

module.exports = mongoose;