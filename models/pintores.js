const mongoose = require('mongoose');
//Schema

let Schema = mongoose.Schema;

//Colección
let PintoresSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Requerimos el nombre']
    },
    corriente:{
        type: String,
        required:[true, 'Requerimos la corriente']
    },
    nacionalidad:{
        type: String,
        required:[true, 'Requerimos la corriente']
    },
    pintura:{
        type: String,
        required:[true, 'Requerimos la corriente']
    }
    
});

module.exports = mongoose.model('Pintores', PintoresSchema);
