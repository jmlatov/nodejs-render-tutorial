import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send('Hola, Mundo')
})

app.listen(3000)
console.log('Servidor en port', 3000)