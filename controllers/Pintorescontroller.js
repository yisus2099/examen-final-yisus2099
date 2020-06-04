let mongoose = require('mongoose');
//Unir al modelo
let Pintores = require('../models/Pintores');

let PintoresController = {};

/* Find */

PintoresController.list = (req, res)=>{
    Pintores.find({})
    .limit(20)
    .skip(0)
    .exec((err,pintor)=>{
        if(err){
            console.log('Error: ',err);
        }
        res.render('../views/index',{
            pintores: pintor,
            title: "Listado De Pintores",
            year: new Date().getDate()
        })
    })

};
module.exports = PintoresController;