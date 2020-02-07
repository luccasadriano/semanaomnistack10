const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()
// MongoDB (Não-relacional)
mongoose.connect('mongodb+srv://luccas:karate@cluster0-ikxhn.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true,
})

app.use(cors())/*{ origin: 'http://localhost:3000' }*/
app.use(express.json())//use = para todas as rotas, caso fosse get seria só para rotas get
app.use(routes)

app.listen(2222)