const objetoCtrl = {}

const Objeto = require('../modelos/objeto.js');

// READ 
objetoCtrl.darObjetos = async (req, res) => {
  const resultado = await Objeto.aggregate([
    {
      $lookup:
      {
        from: 'categorias',
        localField: 'categoria',
        foreignField: '_id',
        as: 'categoria'
      }
    },
    {
      $unwind: '$categoria'
    }
  ])
  //const objetos = await Objeto.find()
  res.json(resultado)
}

// READ
objetoCtrl.darObjeto = async(req, res) => {
  const objeto = await Objeto.findById(req.params.id)
  res.send(objeto)
}

// CREATE
objetoCtrl.crearObjeto = async (req, res) => {
  const nuevoObjeto = new Objeto(req.body)
  await nuevoObjeto.save()
  res.send({message: 'Objeto creado'})
}

// UPDATE
objetoCtrl.cambiarObjeto = async (req, res) => {
  await Objeto.updateOne({ _id:req.params.id }, req.body);
  res.send({message:'Objetos actualizado'})
}

// DELETE
objetoCtrl.borrarObjeto = async(req, res) => {
  await Objeto.findByIdAndDelete(req.params.id)
  res.send({message:'Objeto borrado'})
}

module.exports = objetoCtrl;
