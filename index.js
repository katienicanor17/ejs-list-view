const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs');


//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  var title = 'Demon Slayer';
  res.render('pages/index',{title:title});
});
app.get('/nezuko', (req, res) => {
  var title = 'Nezuko';
  res.render('pages/nezuko',{title:title});
});
app.get('/inosuke', (req, res) => {
  var title = 'Inosuke';
  res.render('pages/inosuke',{title:title});
});
app.get('/zenitsu', (req, res) => {
  var title = 'Zenitsu';
  res.render('pages/zenitsu',{title:title});
});
app.get('/tanjiro', (req, res) => {
  var title = 'Tanjiro';
  res.render('pages/tanjiro',{title:title});
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});