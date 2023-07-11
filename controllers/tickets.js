const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  create,
  new: newTicket,
};

async function newTicket(req, res) {
  try {
    const flight = await Flight.findById(req.params.id);
    const tickets = []; 
    res.render('tickets/new', { flight, tickets });
  } catch (err) {
    console.log(err);
  }
}

async function create(req, res) {
  const flightId = req.params.id;
  req.body.flight = flightId;
  try {
    const ticket = await Ticket.create(req.body);
    res.redirect(`/flights/${flightId}`);
  } catch (err) {
    console.log(err);
  }
}
