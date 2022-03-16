const { Schema , model } = require('mongoose');

const ubicacionEsquema = new Schema({
  _id: {type:Number, require:true},
  nombre: {type:String, require:true},
  latitud: {type:Number, require:true},
  longitud: {type:Number, require:true}
},{
  versionKey:false
});

module.exports = model('Ubicacion', ubicacionEsquema);
