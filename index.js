import express from 'express';
import {config} from 'dotenv';
import pg from 'pg';

config()

const app = express()
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    //ssl: true
})

app.get('/', (req, res) => {
    res.send('Hola, Mundo')
})

app.get('/ping', async (req, res) => {
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})

app.listen(3000)
console.log('Servidor en port', 3000)