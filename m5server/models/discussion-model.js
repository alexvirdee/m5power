const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiscussionSchema = new Schema({
		_author: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		content: {
			type: String,
			required: [true, "Content is required"]
		},
		date: {
			type: Date,
			default: Date.now
		}
  });

const Discussion = mongoose.model('Discussion', DiscussionSchema);
module.exports = Discussion;