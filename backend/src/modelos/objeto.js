const { Schema , model } = require('mongoose');

const objetoEsquema = new Schema({
    _id: {type:Number, require:true},
    nombre: {type:String, require:true},
    descripcion: {type:String, require:false},
    ubicacion: {type:String, require:true},
    categoria: {type:Number, require:false},
    costo: {type:Number, require:false}
},{
    versionKey:false
});

module.exports = model('Objeto', objetoEsquema);
