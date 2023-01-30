const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000

const connectDB = require('./db')
connectDB()

const app = express()

app.use(cors({
    origin: "https://kaleidoscopic-torrone-d7dfee.netlify.app/",
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
}))

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/characters', require('./routes'))

app.listen(port, () => console.log(`Server Started ${port}`))

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500
    res.status(statusCode)
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    })
}

app.use(errorHandler)