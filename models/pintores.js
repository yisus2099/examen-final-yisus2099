const mongoose = require('mongoose');
//Schema

let Schema = mongoose.Schema;

//Colección
let PintoresSchema = new Schema({
    nombre:{
        type: String,
        required: [true,'Requerimos el nombre']
    },
    corriente:{
        type: String,
        required: [true,'Requerimos la corriente']
    },
    nacionalidad:{
        type: String 
    },
    pintura:{
        type: String
    },
    imagen:{
        type: String,
    }
});
 
module.exports = mongoose.model('Pintores', PintoresSchema);