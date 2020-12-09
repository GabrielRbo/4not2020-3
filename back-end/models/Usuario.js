const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    nome: { type: String, required: true },
    cargo: { type: String, required: true},
    data_nascimento: {type: Date, required: true},
    rg: {type: String, required: true},
    valor_hora: {type: Number, required: true, min: 4.75, default: 4.75},
    endereco: {type: String, required: true},
    telefone: {type: String, required: true},
})

module.exports = mongoose.model('Usuario', esquema,'usuarios')