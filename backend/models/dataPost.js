const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const DataPostSchema = new Schema({
        name: String,
        email: String,
        message: String,
        date: {
            type: Date,
            default: Date.now()
        }
})

const DataPost = mongoose.model('wsdata', DataPostSchema);


module.exports = DataPost;