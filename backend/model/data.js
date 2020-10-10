var mongoose = require('mongoose');

var data = new mongoose.Schema({
    name: String,
    email:String,
    mobile:Number


}, {
    timestamps: true
});

module.exports = mongoose.model('Data', data);