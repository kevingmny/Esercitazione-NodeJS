//importo il modulo 'express'
const express = require('express')

//assegno alla variabile 'app' il metodo 'express()'
const app = express()

//metodo per la homepage '/'
app.get('/', (req, res) => {
    res.sendFile('homepage.html', {root: __dirname + '/public'})
  })

app.use(express.static('public'))

//metodo per /chi-siamo
app.get('/chi-siamo', (req, res)=>{
    res.sendFile('chi-siamo.html', {root: __dirname + '/public'})
})

//metodo per /contatti
app.get('/contatti', (req, res)=>{
    res.sendFile('contatti.html', {root: __dirname + '/public'})
})

//gestione errore: URL non esistente
app.all('*', (req, res)=>{
    res.sendFile('error404.html', {root: __dirname + '/public'})
})

//(porte disponibili) tra 3000 e 5000
app.listen(3000)