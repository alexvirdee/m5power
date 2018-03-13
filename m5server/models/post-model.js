const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const DiscussionSchema = require('./discussion-model').Schema;

const PostSchema = new Schema({
		title: {
			type: String,
			required: [true, "Title is required"]
		},
		owner: {
			type: Schema.Types.ObjectId,
			ref: 'User'
		},
		post: {
			type: String,
			required: [true, "Post is required"]
		},
		date: {
			type: Date,
			default: Date.now
		},
		discussion: [ DiscussionSchema ]
	}
);

const Post = mongoose.model('Post', PostSchema)
module.exports = Post;