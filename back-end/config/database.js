const mongoose = require('mongoose')

module.exports = uri => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        
    })

    mongoose.connection.on('connected', () =>
        console.log('==> Mongoose! conectado com sucesso ao servidor')
    )

    mongoose.connection.on('disconnected', ()=>
        console.log('==> Mongoose! Desconectado do servidor')
    )

    //Caputramos um sinal de encerramento (SIGNIT), Crtl+C
    process.on("SIGINT", () =>
    mongoose.connection.close(() => {
        console.log('==> Moongose! Desconectado pelo término da aplicação')
        // 0 indica que a finalização ocorreu sem erros
            process.exit(0);
        })
    )
}