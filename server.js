const express = require('express')
const app = express()
const banco = require('./dbConfig')
const userRoutes = require('./Routes/userRoutes.js')

app.use(express.json())
app.use(express.static("public"))
app.use('/api', userRoutes)

app.listen(3000, function(){banco.connect()}); 





