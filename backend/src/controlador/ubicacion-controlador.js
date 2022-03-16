const ubicacionCtrl = {};

const Ubicacion = require('../modelos/ubicacion');

// READ 
ubicacionCtrl.darUbicaciones = async (req, res) => {
  const ubicaciones = await Ubicacion.find()
  res.json(ubicaciones)
}

// READ
ubicacionCtrl.darUbicacion = async(req, res) => {
  const ubicacion = await Ubicacion.findById(req.params.id)
  res.send(ubicacion)
}

// CREATE
ubicacionCtrl.crearUbicacion = async (req, res) => {
  const nuevaUbicacion = new Ubicacion(req.body)
  await nuevaUbicacion.save()
  res.send({message: 'Ubicacion creada'})
}

// UPDATE
ubicacionCtrl.cambiarUbicacion = async (req, res) => {
  await Ubicacion.findOneAndUpdate(req.params.id, req.body)
  res.send({message:'Ubicacion actualizada'})
}

// DELETE
ubicacionCtrl.borrarUbicacion = async(req, res) => {
  await Ubicacion.findByIdAndDelete(req.params.id)
  res.send({message:'Ubicacion borrada'})
}

module.exports = ubicacionCtrl;
