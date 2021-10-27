
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

// Crear servidor expreess
const app = express();

//Configurar CORS
app.use( cors() ); // Permite restringir los dominios que hacen peticiones anuestro backend

// Base de datos
dbConnection();


// Rutas
app.get( '/', ( req, res ) => {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    });
});

app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT );
} );