const express = require('express');
//Routear 
let pintor = require('../controllers/PintoresController.js');

//rutas
let router = express.Router();

router.get('/', pintor.list);

module.exports = router;