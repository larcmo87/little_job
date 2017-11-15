const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
	
	// this is the user who posts a project
	client: {
		type: String,
		required: true
	},
	description: { type: String, required: true },
	start_price: { type: Number, required: true },
	status: {
		type: String,
		required: true,
		enum: ["active", "complete"],
		default: "active"
	},
	// bid is a child of the project	
	bid: {
		type: Schema.Types.ObjectId,
		ref: "Bid"
	}
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;