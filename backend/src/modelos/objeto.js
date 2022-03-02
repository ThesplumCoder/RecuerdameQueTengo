const { Schema , model } = require('mongoose');

const objetoEsquema = new Schema({
    nombre: {type:String, require:true},
    descripcion: {type:String, require:false},
    ubicacion: {type:String, require:true},
    costo: {type:Number, require:false}
},{
    timestamps:true,
    versionKey:false
});

module.exports = model('Objeto', objetoEsquema);
