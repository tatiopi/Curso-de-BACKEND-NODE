const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');

//
//const router = require('./components/message/network');

// cuidado con el orden!! app.use(router) ira al final despues del resto de middelware
var app = express();
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json()); // app.use(express.json()); (se puede usar indistintamente)
//app.use(router);

router(app);


// para indicarle a NODe dodne vamos a servir las paginas 
// estaticas , en nuesrto cao seria
// localhosto:3000/app/index.html
// 1. Se debe crear una carpeta llamada public donde este nuestro index.html
app.use('/app', express.static('public'));
app.listen('3000');
console.log('La aplicacion esta escuhando en http://localhost:3000');