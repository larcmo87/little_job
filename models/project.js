const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Bid = require("./bid.js");

const projectSchema = new Schema({
	
	userId: {type:String, required: true},
	description: { type: String },
	start_price: { type: Number, required: true },
	status: {
		type: String,
		required: true,
		enum: ["active", "complete"],
		default: "active"
	},
	// bid is a child of the project	
	bid: [{
		type: Schema.Types.ObjectId,
		ref: "Bid"
	}]
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;