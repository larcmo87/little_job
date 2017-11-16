const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bidSchema = new Schema({
	
	provider:{
		type: String,
		required: true
	},
	price: { type: Number },
	notes: { type: String }
});

const Bid = mongoose.model("Bid", bidSchema);

module.exports = Bid;

