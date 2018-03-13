var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UseSchema   = new Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('User', UseSchema);