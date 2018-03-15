var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema   = new Schema({
    name:{ type: String, required:true },
    cpf: { type: String, required:true, unique:true},
    hash: String,
    salt: String
});

module.exports = mongoose.model('User', UserSchema);