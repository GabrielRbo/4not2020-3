const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    cod: {type: Number, required: true},
    marca: {type: String, required: true},
    grupo_prensas: {type: mongoose.ObjectId, ref: 'GrupoPrensa', required: true},
    solado_prod: {type: mongoose.ObjectId, ref: 'Solado', required: true}
})

module.exports = mongoose.model('InfoPrensa', esquema,'info_prensas')