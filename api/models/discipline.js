var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DisciplineSchema   = new Schema({
    name: String,
    schedule: String,
    difficulty: String,
    teacherId: Schema.Types.ObjectId
});

module.exports = mongoose.model('Discipline', DisciplineSchema);