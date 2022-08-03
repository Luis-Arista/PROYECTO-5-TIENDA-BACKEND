const express = require('express');
const cors = require('cors');
const rutasApi = require('./api/index')
const app = express();


app.use( express.json() );
app.use ( cors() );
app.use( '/api/v1' , rutasApi )

app.use( '/' , (  req ,res ) => {
    res.status(200).send({
        mensaje : "Backend funcioanndo correctamente",
        versionContraError: 1
    })
})

module.exports = app