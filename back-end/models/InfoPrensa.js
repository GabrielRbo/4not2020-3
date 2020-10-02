const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    marca: {type: String, required: true},
    ult_manutencao: {type: Date, required: true},
    grupo_prensas: {type: mongoose.ObjectId, ref: 'GrupoPrensa', required: true},
    solados: {type: mongoose.ObjectId, ref: 'Solado', required: true}
})

module.exports = mongoose.model('InfoPrensa', esquema,'info_prensas')