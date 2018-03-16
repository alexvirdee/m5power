const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Post = require('./post-model');

const MCarSchema = new Schema({
     modelM: {
        type: String,
        required: [true, "modelM required"]
     },
    year: {
        type: Number,
        required: true
    },
    posts: [Post.schema],
    specs: Array,
    image: {
        type: String,
        default: ''
    },
});

const MCar = mongoose.model('MCar', MCarSchema);
module.exports = MCar;