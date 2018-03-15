var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EnrollmentSchema   = new Schema({
    userId: Schema.Types.ObjectId,
    courseId: Schema.Types.ObjectId,
    scheduleId: Schema.Types.ObjectId,
    disciplines : []
});

module.exports = mongoose.model('Enrollment', EnrollmentSchema);