const app = require('./src/app');

const mongoose = require('./src/db/mongodb');
require('dotenv').config();

const PORT = process.env.PORT;

const init = async() => {
    await app.listen(PORT);
    await mongoose.connect
    console.log('-------------------------------------------------');
    console.log(`Servidor funcionando en puerto: ${PORT}`);
};

init()