const express = require('express')
const path = require('path')
const loogger = require('morgan')
const fs = require('fs')
const bodyParser = require('body-parser')

const app = express()
const PORT = 12010
const simple_module = require('./simple_module(2).js')
const _path = path.join(__dirname, './dist')
console.log(_path);

app.use(loogger('tiny'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extends:true} ))
app.use('/dist', express.static(_path))
app.use((req,res,next)=> {console.log('요청이 왔소 지나가리다');next()})


app.get('/book/:bookName',(req,res)=>{
  const {bookName} = req.params
  res.send(`안녕하세요 NIC입니다. ${bookName}을 주문하셨네요`)
})

app.get('/join', (req,res) => {
  fs.readFile('./dist/join.html',function(error,data){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end(data)
  })
})
app.post('/joinfrm', (req,res) => {
  const {body: {id, name, pwd}} = req
  console.log(id, name ,pwd);
})

app.get("/", simple_module.index)
app.get('/users/:userName/book/:bookName',simple_module.handleBook)


app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
}) 