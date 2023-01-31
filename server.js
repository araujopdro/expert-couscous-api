const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000

const app = express()

app.use(cors())

console.log("cors")

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.listen(port, () => console.log(`Server Started ${port}`))

