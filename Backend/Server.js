const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/Todo.js')
const cors =  require('cors')



require('dotenv').config()


const app = express()
const PORT = process.env.port || 5000
app.use(express.json())
app.use(cors())

mongoose
.connect("mongodb+srv://syedafaiza2610:faizanaqi123@clustor1.jukqksg.mongodb.net/")
.then(() => console.log("Database Connected"))
.catch((err) => console.log(err))
app.use(routes)


app.listen(PORT, () => console.log(`Server is Running on: ${PORT} `))