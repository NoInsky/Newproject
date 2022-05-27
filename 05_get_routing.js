const express = require('express')
const app = express()
const loogger = require('morgan')
const PORT = 3000
const simple_module = require('./simple_module.js')


app.use(loogger('tiny'))

//request(요청)가 들어올 때
app.get("/", simple_module.intro)
app.get('/users/:userName/book/:bookName',simple_module.handleBook)

//server가 실행 상태로 전환
app.listen(PORT, () => {
  console.log(`Server running at http://127.0.0.1:${PORT}/`);
}) 