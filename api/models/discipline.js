var mongoose = require('mongoose');
var Teacher = require('./teacher');
var Schema = mongoose.Schema;

var DisciplineSchema   = new Schema({
    name: String,
    schedule: String,
    difficulty: String,
    teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' }
});

module.exports = mongoose.model('Discipline', DisciplineSchema);