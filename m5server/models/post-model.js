const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Discussion = require('./discussion-model');


const PostSchema = new Schema({
		title: {
			type: String,
			required: [true, "Title is required"]
		},
		owner: { type: String
			// type: Schema.Types.ObjectId,
			// ref: 'User'
		},
		text: {
			type: String,
			required: [true, "Post content is required"]
		},
		createdAt: {
			type: Date,
			default: Date.now
		},
		image: {
			type: String,
			required: [false, "image for post is not required"],
			default: ''
		},
		mcar: { type: Schema.Types.ObjectId,
				// required: true,
				ref: 'MCar'
		 },
		discussion: [Discussion.schema]
	}
);

const Post = mongoose.model('Post', PostSchema)
module.exports = Post;