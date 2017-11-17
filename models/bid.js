const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bidSchema = new Schema({
	
	provider:{
		type: String,
		required: true
	},
	price: { type: Number },
	time: { type: String }
});

const Bid = mongoose.model("Bid", bidSchema);

module.exports = Bid;

