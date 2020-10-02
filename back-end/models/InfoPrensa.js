const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    marca: {type: String },
    ult_manutencao: {type: Date},
    solados: {type: mongoose.ObjectId, ref: 'Solado', required: true},
    grupo_prensas: {type: mongoose.ObjectId, ref: 'GrupoPrensa', required: true}

})

module.exports = mongoose.model('InfoPrensa', esquema,'info_prensa')