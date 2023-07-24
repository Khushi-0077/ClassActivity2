Khushpreet Kaur
c0886593
19 july 2023


const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Class');

  console.log(req.query.name);
})
app.get('/peanut', function (req, res) {
    res.send('Hello Peanut!');
  
    console.log(req.query);
  })


app.listen(3000)
