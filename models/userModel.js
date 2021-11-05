const mongoose = require('../connection');
const Schema = mongoose.Schema;

const schema = new Schema({
    Fullname: String,
    email : String,
    password : String,
    created: Date,
})
const model= mongoose.model("users", schema);
module.exports = model;