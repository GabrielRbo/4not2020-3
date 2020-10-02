const InfoPrensa  = require('../models/InfoPrensa')

const controller = {}   // Objeto vazio

// Operação CREATE, função novo()
controller.novo = async (req, res) => {
    // Usa os dados que chegam dentro do body da requisição
    // e os envia o BD para a criação de um novo objeto
    try {
        await InfoPrensa.create(req.body)
        // HTTP 201: Created
        res.status(201).end()
    }
    catch(erro) {
        console.log(erro)
        // HTTP 500: Internal Server Error
        res.status(500).send(erro)
    }
}

// Operação RETRIEVE (all), função listar()
controller.listar = async (req, res) => {
    try {
        let dados = await InfoPrensa.find()
        .populate('grupo_prensas')
        .populate('solados')// Traz todos os cursos cadastrados
        res.send(dados) // Vai com status HTTP 200
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
        
    }
}

// Operação RETRIEVE(one), função obterUm()
controller.obterUm = async (req, res) => {

    try {
        // Capturando o parâmetro id da URL
        const id = req.params.id
        let obj = await InfoPrensa.findById(id)

        // O objeto existe e foi encontrado
        if(obj) res.send(obj) // HTTP 200
        // Não encontrado
        else res.status(404).end() // HTTP 404: Not found
    }
    catch(erro) {
        console.log(erro)
        res.status(500).send(erro)
    }
}

// Operação UPDATE, função atualizar()
controller.atualizar = async (req, res) => {
    try {
        // Isolar o _id do objeto que está sendo alterado
        const id = req.body._id

        //Busca e substituição de conteúdo do objeto
        let ret = await InfoPrensa.findByIdAndUpdate(id, req.body)

        // Se encontrou e atualizou, retornarmos HTTP 204: No content
        if(ret) res.status(204).end()
        // Não encontrou o objeto para ser alterado, retorno HTTP 404: Not found
        else res.status(404).end()
        }
        catch(erro){
            console.log(erro)
            res.status(500).send(erro)
            
        }
}

// Operação DELETE, função excluir()
controller.excluir = async (req, res) => {
    try{
        //Isolando o id
        const id = req.body._id

        // Busca pelo id e exclusão
        let ret = await InfoPrensa.findByIdAndDelete(id)

        //Encontrou e excluiu, HTTP 204: No content
        if(ret) res.status(204).end()

        //Não encontrou, HTTP 404: Not Found
        else res.status(404).end()
        }
        catch(erro) {
            console.log(erro)
            res.status(500).send(erro)
        }

   
}

module.exports = controller