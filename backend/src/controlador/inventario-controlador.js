const inventarioCtrl = {}

const Objeto = require('../modelos/objeto.js');

inventarioCtrl.darObjetos = async (req, res) => {
    const objetos = await Objeto.find()
    res.json(objetos)
}

inventarioCtrl.darObjeto = async(req, res) => {
    const objeto = await Objeto.findById(req.params.id)
    res.send(objeto)
}

inventarioCtrl.crearObjeto = async (req, res) => {
    const nuevoObjeto = new Objeto(req.body)
    await nuevoObjeto.save()
    res.send({message: 'Objeto creado'})
}

inventarioCtrl.cambiarObjeto = async (req, res) => {
    await Objeto.findOneAndUpdate(req.params.id, req.body)
    res.send({message:'Objetos actualizado'})
}

inventarioCtrl.borrarObjeto = async(req, res) => {
    await Objeto.findByIdAndDelete(req.params.id)
    res.send({message:'Objeto borrado'})
}

module.exports = inventarioCtrl;
