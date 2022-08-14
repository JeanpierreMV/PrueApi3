const express = require('express')
const path = require('path')

const app = express()
//routes
//app.get('/api/users',(req,res) => res.json([{name:'ryan'},{name:"joe"}]))
//app.use(express.)get('/',(req, res) => res.send("hello world"))


//static files  
app.use(express.static('public'))

//starting server
app.listen(process.env.PORT || 3000)
console.log('Server on port', process.env.PORT ||3000)