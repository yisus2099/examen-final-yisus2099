//Importaciones
const express = require('express');
const hbs = require('hbs');
const mongoose = require('mongoose');
//Constante del puerto
const PUERTO = process.env.PORT || 3000;

//Emplear rutas
let pintoresRouter = require('./routes/pintor');

//Sitio web y HBS
const app = express();
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');
app.use(express.static(__dirname + '/public'));

//Ruta 
app.use('/', pintoresRouter);

//Conexion con MongoDB
mongoose.Promise = global.Promise;
const cadena = 'mongodb+srv://theBatman_2020:batinson@exacbtis-qflpq.mongodb.net/cursos?retryWrites=true&w=majority';

mongoose.connect(cadena,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>{
        console.log('Conexión realizada :)');
    })
    .catch(err=> console.log(err));


    //Arrancar servidor
    app.listen(PUERTO,()=>{
        console.log('Escuchando el puerto 3000');
    })
    