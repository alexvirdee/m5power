const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MCarSchema = new Schema({
    year: {
        type: String,
        required: true
    },
    modelM: String,
    posts: Array,
    specs: Array,
    image: {
        type: String,
        default: ''
    },
});

const MCar = mongoose.model('MCar', MCarSchema);
module.exports = MCar;