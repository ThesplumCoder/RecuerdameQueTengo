const { Schema, model } = require('mongoose');

const categoriaEsquema = new Schema({
    _id: {type:Number, require:true}, 
    nombre: {type:String, require:true},
    descripcion: {type:String, require:false},
},{
    versionKey:false
});

module.exports = model('Categoria', categoriaEsquema);
