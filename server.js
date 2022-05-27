const express = require('express')
const path = require('path')

// const express = require('express')
// const loogger = require('morgan')
// const simple_module = require('./simple_module.js')

const app = express()
app.set('port', process.env.PORT || 12010)
const _path = path.join(__dirname,'./dist')

app.use(express.static(_path))
const PORT = app.get('port')
app.listen(PORT, () => {
  console.log(`nodemon Server running at http://127.0.0.1:${PORT}/`);
  console.log(` http://127.0.0.1:${PORT}/join`);
  console.log(`http://127.0.0.1:${PORT}/login`);


})

// app.use(loogger('tiny'))

// //request(요청)가 들어올 때
// app.get("/", simple_module.intro)
// app.get('/users/:userName/book/:bookName',simple_module.handleBook)

// //server가 실행 상태로 전환
// app.listen(PORT, () => {
//   console.log(`Server running at http://127.0.0.1:${PORT}/`);
// }) 