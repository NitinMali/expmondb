const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes');

//init express
const app = express();
//init express router 
const router = express.Router()

const port = process.env.PORT || 3000;


//https://codeburst.io/dont-use-nodemon-there-are-better-ways-fc016b50b45e
const chokidar = require('chokidar');
const watcher = chokidar.watch('./app')


watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Clearing /app/ module cache from server")
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]app[\/\\]/.test(id)) {
          delete require.cache[id]
      }

      app.listen(port);
    })
  })
})

//express middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//default express router
router.get('/', function(req,res){
    res.json({message: 'Express is running!!!'});
});

//associate routes to url path
app.use('/', router);
app.use('/api', routes);

app.get('*', function(req,res){
    res.send('404 - page not found');
})

app.listen(port);
console.log('Listening on port '+ port);