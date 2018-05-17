const express = require('express');
const listController = require('./app/controllers/listController');

const router = express.Router();

router.get('/', function(req, res){
    res.json({status: 'List api'});
});
router.get('/list', listController.getLists);

module.exports = router;

