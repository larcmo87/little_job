const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Bid = require("./bid.js");

const projectSchema = new Schema({
	_id: {
		type: Objectid,
		required: true
	},
	// this is the user who posts a project
	client: {
		type: String,
		required: true
	},
	description: { type: String },
	start_price: { type: Number, required: true },
	status: {
		type: String,
		required: true,
		enum: ["active", "inProgress", "complete"],
		default: "active";
	},
	// bid is a child of the project
	bid: [Bid]
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;