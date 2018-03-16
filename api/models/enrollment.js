var mongoose = require('mongoose');

var User = require('./user');
var Course = require('./course');
var Period = require('./period');
var Discipline = require('./discipline');

var Schema = mongoose.Schema;

var EnrollmentSchema   = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    course: { type: Schema.Types.ObjectId, ref: 'Course' },
    period: { type: Schema.Types.ObjectId, ref: 'Period' },
    disciplines: [{ type: Schema.Types.ObjectId, ref: 'Discipline' }]
});

module.exports = mongoose.model('Enrollment', EnrollmentSchema);