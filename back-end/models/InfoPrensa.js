const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    cod: {type: Number, required: true},
    marca: {type: String, required: true},
    solado: {type: mongoose.ObjectId, ref: 'Solado', required: true},
    grupo_prensas: {type: mongoose.ObjectId, ref: 'GrupoPrensa', required: true}
    
})

module.exports = mongoose.model('InfoPrensa', esquema,'info_prensas')