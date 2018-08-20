const path = require('path');
const express = require('express')
const app = express()

const img = express.static(path.join(__dirname, './img/'));
const style = express.static(path.join(__dirname, './css/'));
app.use('/img', img);
app.use('/css', style);
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index')
})

var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log(`Website listening on port ${port}!`)
})
