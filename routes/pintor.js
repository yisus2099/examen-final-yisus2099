const express = require('express');
//Routear 
let pintor = require('../controllers/Pintorescontroller.js');

//rutas
let router = express.Router();

router.get('/', pintor.list);

module.exports = router;