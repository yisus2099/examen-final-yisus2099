const mongoose = require('mongoose');
//Schema

let Schema = mongoose.Schema;

//Colección
let PintoresSchema = new Schema({
    _id:{
        type: String,
        
    },
   nombre:{
        type: String,
       
    },
    nacionalidad:{
        type: String,
       
    },
    corriente:{
        type: String,
        
    },
    pintura:{
        type: String,
        
    }
    
});

module.exports = mongoose.model('Pintores', PintoresSchema);
