const express = require('express');
const cors = require('cors');
const rutasApi = require('./api/index')
const app = express();


require('dotenv').config()
const URL_MONGODB = process.env.URL_MONGODB


app.use( express.json() );
app.use ( cors() );
app.use( '/api' , rutasApi )

app.use( '/' , (  req ,res ) => {
    res.status(200).send({
        mensaje : "Backend funcioanndo correctamente",
        data: URL_MONGODB
    })
})

module.exports = app