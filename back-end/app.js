var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const db = require('./config/database')
const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASS
const dbName = process.env.DB_NAME
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.vkppw.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`)

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

const teste = require('./routes/teste')
app.use('/teste', teste)

const solado = require('./routes/solado')
app.use('/solado', solado)

const operador = require('./routes/operador')
app.use('/operador', operador)

const grupo_prensa = require('./routes/grupo_prensa')
app.use('/grupo_prensa', grupo_prensa)

const administrador = require('./routes/administrador')
app.use('/administrador', administrador)

const info_prensa = require('./routes/info_prensa')
app.use('/info_prensa', info_prensa)

module.exports = app;