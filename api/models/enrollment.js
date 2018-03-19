var mongoose = require('mongoose');

var User = require('./user');
var Course = require('./course');
var Period = require('./period');
var Notes = require('./note');

var Schema = mongoose.Schema;

var EnrollmentSchema   = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    course: { type: Schema.Types.ObjectId, ref: 'Course' },
    period: { type: Schema.Types.ObjectId, ref: 'Period' },
    notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }]
});

module.exports = mongoose.model('Enrollment', EnrollmentSchema);