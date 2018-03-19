var mongoose = require('mongoose');
var Course = require('./course');
var Schema = mongoose.Schema;

var User = require('./user');
var Discipline = require('./discipline');

var NoteSchema   = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    discipline: { type: Schema.Types.ObjectId, ref: 'Discipline' },
    nota: Number,
    status:String
});

module.exports = mongoose.model('Note', NoteSchema);