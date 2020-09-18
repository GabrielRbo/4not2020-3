const mongoose = require('mongoose')

const esquema = mongoose.Schema({
    //Descrever os dados do "curso" (Model)
    nome: { type: String, required: true},
    data_inicial: { type: Date, required: true},
    data_final: { 
        type: Date, 
        required: true,
        validate: {
            validator: function(valor){
                return valor >= this.data_inicial
            },
            message: () => 'A Data final deve ser maior ou igual a data inicial'
        }
    },
    dias_semana: [{ 
        type: String, 
        required: true,
        enum: ['dom','seg','ter','qua','qui','sex','sab']
    }],
    // Valors que usam apenas a parte de hora de uma data
    // São manipulados mais facilmennte como String
    horario_inicial: { type: String, required: true},
    horario_final: { type: String, required: true},
    curso: {type: mongoose.ObjectId, ref: 'Curso', required: true},
    professor: {type: mongoose.ObjectId, ref: 'Professor', required: true},
    sala_aula: {type: mongoose.ObjectId, ref: 'SalaAula', required: true}
})

/* 
    Parâmetros do método mongoose.model()
    1º -> Nome do modelo (Sempre igual a nome do arquivo)
    2º -> Estrutura (esquema) do modelo
    3º -> Nome da coleção (collection) em que os objetos criados a partir do
            modelo serão armazenados no MongoDB
*/
module.exports = mongoose.model('Turma', esquema,'turmas')