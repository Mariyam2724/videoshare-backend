const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    user: {type: mongoose.Types.ObjectId,ref:"users"},
    file:String,
    thumbnail:String,
    shared: [{type: mongoose.Types.ObjectId,ref:"users"}],
    title: String,
    created: Date,
})
const model= mongoose.model("videos", schema);
module.exports = model;