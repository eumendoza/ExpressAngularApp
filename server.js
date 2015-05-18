var express = require('./config/express.js');

var app = express();
app.listen(3000);

module.exports = app;

console.log('Servidor arrancado');