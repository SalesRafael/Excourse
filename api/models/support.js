var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SupportSchema   = new Schema({
    message:{ type: String, required:true }
});

module.exports = mongoose.model('Support', SupportSchema);