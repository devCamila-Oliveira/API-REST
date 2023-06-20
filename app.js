// importando dependencias
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const router = require('./routes/routes');

// setando app Express
const app = express();

// adicionando helmet para maior segurança (headers)
app.use(helmet());
// usando bodyParser para transformar json em objetos JS
app.use(bodyParser.json());
// habilitando CORS nos requests
app.use(cors());
// middleware de log de requests
app.use(morgan('combined'));

// aplicar rotas
app.use(router);

// hello world
app.get('/', (req, res) => {
  res.send('Hello, world (again)!');
});

module.exports = app;