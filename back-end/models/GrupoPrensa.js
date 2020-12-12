const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    //Descrever os dados do "curso" (Model)
    codigo: {type: Number, required: true},
    capacidade: { type: Number, default: 1.000},
    solado_prod: {type: mongoose.ObjectId, ref: 'Solado', required: true}

})

/* 
    Parâmetros do método mongoose.model()
    1º -> Nome do modelo (Sempre igual a nome do arquivo)
    2º -> Estrutura (esquema) do modelo
    3º -> Nome da coleção (collection) em que os objetos criados a partir do
          modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('GrupoPrensa', esquema,'grupo_prensas')
