const express = require('express')
const path = require('path')
const loogger = require('morgan')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()
const PORT = 12010
const _path = path.join(__dirname, './dist')
console.log(_path);

app.use(loogger('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extends:true} ))
app.use(express.static(_path))

app.get('/join', (req,res) => {
  fs.readFile('./dist/join.html',function(error,data){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(data)
  })
})
app.post('/joinfrm', (req,res) => {
  const {body: {id, name, pwd, repwd}} = req
  console.log(name, id, pwd, repwd);
  fs.readFile('./dist/welcome.html',function(error,data){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(data)
})
})
app.post('/welfrm', (req,res) => {
  const {body: {id, name, pwd, repwd}} = req
  console.log(name, id, pwd, repwd);
  fs.readFile('./dist/login.html',function(error,data){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(data)
})
})

app.get('/login', (req,res) => {
  fs.readFile('./dist/login.html',function(error,data){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(data)
  })
})
app.post('/loginfrm', (req,res) => {
  const {body: {id, pwd}} = req
  console.log(id, pwd);
  fs.readFile('./dist/index.html',function(error,data){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(data)
  })
})



app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
}) 