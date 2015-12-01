/**
 * Created by lucas on 1/12/2015.
 */
var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var http = require('http');

var ticketCtrl = require('../controller/server.controller.tickets.js');
mongoose.connect('mongodb://testaccount:Password123@ds061374.mongolab.com:61374/ticketruilsysteem')
var app = express();

app.set('views', path.join(__dirname, '../src'));

//GET Nieuw Ticket page
router.get('/ticketregistreren',function(req,res){
    res.send('Hello World');
    //return ticketCtrl.getTickets(req,res);
});

//POST Nieuw Ticket page
router.post('/ticketregistreren',function(req,res){
    return ticketCtrl.create(req,res);
});

module.exports = router;

var server = http.createServer(app);
server.listen(63342);