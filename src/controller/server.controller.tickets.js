/**
 * Created by lucas on 1/12/2015.
 */

var Ticket = require('../models/server.model.tickets.js');

exports.create = function(req,res){
    var entry = new Ticket({
        title: req.body.formTicketTitle,
        sort: req.body.formTicketSort,
        price: req.body.formTicketPrice,
        amount: req.body.formTicketAmount,
        owner: req.body.formTicketOwner
    });

    entry.save();
    //redirect to home page
    res.redirect(301, '../index.html')
};


exports.getTickets = function(req,res)
{
    res.render('../ticketregistreren.html', {title: 'Register a new ticket'});
}