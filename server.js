const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//init express
const app = express();
//init express router 
const router = express.Router()

const port = process.env.PORT || 3000;

const mongoDBUrl = '';
mongoose.connect(mongoDBUrl);

const ListSchema = require('./app/models/list');

mongoose.model('TripList', ListSchema)

const db = mongoose.connection;
mongoose.Promise = global.Promise;

db.on('error',  function(err) {
  console.error('MongoDB connection error:'+ err);
});

db.on('open', function(ref){
  console.log('Connected to mongo server!!')
});


const routes = require('./routes');

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