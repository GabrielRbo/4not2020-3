const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    //Descrever os dados do "curso" (Model)
    cod_ref: {type: String, required: true},
    referencia: { type: String, required: true},
    tempo_producao: {type: Number, required: true},
    formula: {type: String, required: true}
})

/* 
    Parâmetros do método mongoose.model()
    1º -> Nome do modelo (Sempre igual a nome do arquivo)
    2º -> Estrutura (esquema) do modelo
    3º -> Nome da coleção (collection) em que os objetos criados a partir do
            modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Solado', esquema,'solados')