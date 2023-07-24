Khushpreet Kaur
c0886593
19 july 2023



const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)
