const categoriaCtrl = {} 

const Categoria = require('../modelos/categoria');

categoriaCtrl.darCategorias = async (req, res) => {
    const categorias = await Categoria.find()
    res.json(categorias)
}

categoriaCtrl.darCategoria = async(req, res) => {
    const categoria = await Categoria.findById(req.params.id)
    res.send(categoria)
}

categoriaCtrl.crearCategoria = async (req, res) => {
    const nuevaCategoria = new Categoria(req.body)
    await nuevaCategoria.save()
    res.send({resultado: 'Categoria creada'})
}

categoriaCtrl.cambiarCategoria = async (req, res) => {
    await Categoria.findOneAndUpdate(req.params.id, req.body)
    res.send({resultado:'Categoria actualizada'})
}

categoriaCtrl.borrarCategoria = async(req, res) => {
    await Categoria.findByIdAndDelete(req.params.id)
    res.send({resultado:'Categoria borrada'})
}

module.exports = categoriaCtrl;
