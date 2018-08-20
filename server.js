const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function (req, res) {
  res.render('index')
})

var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log(`Website listening on port ${port}!`)
})
