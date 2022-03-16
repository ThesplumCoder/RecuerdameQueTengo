const categoriaCtrl = {} 

const Categoria = require('../modelos/categoria');

// READ
categoriaCtrl.darCategorias = async (req, res) => {
  const categorias = await Categoria.find()
  res.json(categorias)
}

// READ
categoriaCtrl.darCategoria = async(req, res) => {
  const categoria = await Categoria.findById(req.params.id)
  res.send(categoria)
}

// CREATE
categoriaCtrl.crearCategoria = async (req, res) => {
  const nuevaCategoria = new Categoria(req.body)
  await nuevaCategoria.save()
  res.send({resultado: 'Categoria creada'})
}

// UPDATE
categoriaCtrl.cambiarCategoria = async (req, res) => {
  await Categoria.updateOne({ _id:req.params.id }, req.body);
  res.send({resultado:'Categoria actualizada'})
}

// DELETE
categoriaCtrl.borrarCategoria = async(req, res) => {
  await Categoria.findByIdAndDelete(req.params.id)
  res.send({resultado:'Categoria borrada'})
}

module.exports = categoriaCtrl;
