/**
 * Created by lucas on 1/12/2015.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticketSchema = new Schema({
    title: String,
    sort: String,
    price: String,
    amount: String,
    owner: String,
    createdOn: {type:Date, default: Date.now}
});

//Export model om hem bruikbaar te maken
module.exports = mongoose.model('Ticket',ticketSchema);