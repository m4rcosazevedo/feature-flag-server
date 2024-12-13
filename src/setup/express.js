const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({
    origin: '*',
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json())


module.exports = app
