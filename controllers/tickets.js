const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create,
    new: newTicket
}

function newTicket(req, res) {
    Flight.findById(req.params.id)
    res.render('tickets/new', {flightId: req.params.id})
}

async function create(req, res) {
	const flightId = req.params.id;
	req.body.flight = flightId;
	try{
        const ticket = await Ticket.create(req.body)
		res.redirect(`/flights/${flightId}`);
	} catch(err) {
        console.log(err)
    }
}