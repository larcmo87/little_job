const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Bid = require("./bid.js");
const Project = require("./project.js");

const userSchema = new Schema({
	children: [Project, Bid],
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true,
		min: 8
	},
	web_token: {
		type: Boolean,
		required: true
	},
	user_type: {
		type: String,
		required: true,
		enum: ["client", "mechanic"]
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
	car: {
		make: { type: String },
		model: { type: String },
		year: { type: Number },
		fuel: { type: String },
		license: { type: String }
	}
})