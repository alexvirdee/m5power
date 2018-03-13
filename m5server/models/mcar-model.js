const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MCarSchema = new Schema({
     modelM: {
        type: String,
        required: [true, "modelM required"]
     },
    year: {
        type: String,
        required: true
    },
    posts: Array,
    specs: Array,
    image: {
        type: String,
        default: ''
    },
});

const MCar = mongoose.model('MCar', MCarSchema);
module.exports = MCar;