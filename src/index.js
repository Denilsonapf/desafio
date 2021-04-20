const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { request, response } = require('express');

const app = express();




//iniciando o banco de dados
mongoose.connect('mongodb+srv://denilson:denilson@cluster0.gztxb.mongodb.net/desafio?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());

//validando requisições em Json
app.use(express.json());



app.use(routes);



app.listen(3333);