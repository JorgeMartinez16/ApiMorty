const express = require('express');
const app = express()
const characterRoutes = require('./routes/characters.routes');
 

 app.get('/', function (req, res) {
    res.send('Hello World')
})

characterRoutes(app)
  
  app.listen(3000) 