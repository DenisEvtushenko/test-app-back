const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/route');
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, 'text/plain', Accept");
  res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', product);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
