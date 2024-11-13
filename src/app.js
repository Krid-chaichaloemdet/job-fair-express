require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const userRoute = require('./router/user-route')

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())  


app.use('/user', userRoute)


const PORT = process.env.PORT || 5001
app.listen(PORT, ()=>console.log("server is running on port 8000"))