
const express = require('express')
const PeopleController = require('./PeopleController')
const app = express()
const port = 3000

app.get('/', PeopleController.get);

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})