const express = require('express');
const { appendFile } = require('fs');
const mongoose = require('mongoose');
const engine = require('ejs-mate');
const path = require('path');
var methodOverride = require('method-override');

const app = express();
mongoose
  .connect('mongodb://127.0.0.1:27017/')
  .then(() => console.log('connection opened with mongoose'))
  .catch((err) => console.log('cannot access mongodb for some reason'));
app.engine('ejs', engine);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));

app.use(express.static('public'));

app.use(methodOverride('_method'));

app.listen(3000, () => {
  console.log('the port is opened on 3000');
});

app.get('/', (req, res, next) => {
  res.render('./boilerplate/home');
});

app.get('/admin', (req, res, next) => {
  var name = { name: ' gratus', namee2: '' };
  console.log(name.name);
  res.render('admin', { name });
});

app.post('/admin', (req, res, next) => {});

app.put('/resource', (req, res, next) => {
  console.log('the method over ride is working');
  res.send('this is working');
});

app.get('/about', (req, res, next) => {
  res.render('about');
});
////////
