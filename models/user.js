const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	userId:{
		type: String,
		required: true,
		unique: true	
	},
	username: {
		type: String,
		required: true,		
	},
	password: {
		type: String,
		required: true,
		min: 8
	},
	user_type: {
		type: String,
		required: true,
		enum: ["poster", "mechanic"]
	},
	email: {
		type: String,
		required: true,
		validate: function(email) {
      		return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)
    	}
	},
	phone_number: { type: String },
	credentials: { type: String },
	address: { type: String },
	city: { type: String },
	state: { type: String },	
	zip: { type: String },
	
	// car: {
	// 	make: { type: String },
	// 	model: { type: String },
	// 	year: { type: Number },
	// 	fuel: { type: String },
	// 	license: { type: String }
	// },
	project: [{
		type: Schema.Types.ObjectId,
		ref: "Project"
	}],
	bid: [{
		type: Schema.Types.ObjectId,
		ref: "Bid"
	}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;