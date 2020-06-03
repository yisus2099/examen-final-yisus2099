//Importaciones
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//Constante del puerto
const port = process.env.PORT || 3000;

//Emplear rutas
let pintoresRouter = require('./routes/pintor');

//Sitio web y HBS
const app = express();
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');
app.use(express.static(__dirname+'/public'));

//Ruta 
app,use('/', pintoresRouter);

//Conexion con MongoDB
mongoose.Promise = global.Promise;
const cadena = 'nuestra cadena de conexion de mongo'