const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bidSchema = new Schema({
	_id: {
		type: Objectid,
		required: true
	},
	provider:{
		type: String,
		required: true
	},
	price: { type: Number },
	notes: { type: String }
});

const Bid = mongoose.model("Bid", bidSchema);

module.exports = Bid;

