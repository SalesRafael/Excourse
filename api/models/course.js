var mongoose = require('mongoose');
var Discipline = require('./discipline');
var Schema = mongoose.Schema;

var CourseSchema   = new Schema({
    name: String,
    disciplines :[{ type: Schema.Types.ObjectId, ref: 'Discipline' }]
});

module.exports = mongoose.model('Course', CourseSchema);