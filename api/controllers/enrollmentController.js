var Enrollment = require('../models/enrollment');
var Note = require('../models/note');

exports.getEnrollments = function (req, res) {
    Enrollment.find({})
    .populate('user')
    .populate('course')
    .populate('period')
    .populate({
        path: 'notes',
        populate: { path: 'discipline' }
    })
    .populate({
        path: 'discipline',
        populate: { path: 'teacher' }
    })
    .exec(function (err, enrollments) {
        if (err) { res.status(500).send(err)
        }else{
            //Note.populate(enrollments.notes, {path: 'discipline'}, function (err, enrollments) {});
            res.status(200).json(enrollments);
        }
        
    });
}

exports.getEnrollment = function (req, res) {
    Enrollment.findById(req.params.id)
        .populate('user')
        .populate('course')
        .populate('period')
        .populate({
            path: 'notes',
            populate: { path: 'discipline' }
        })
        .exec(function (err, enrollment) {
        if (err) res.status(500).send(err)
        res.status(200).json(enrollment);
    });
}

exports.insertEnrollment = function (req, res) {
    let enrollment = new Enrollment({
        userId: req.body.userId,
        courseId: req.body.courseId,
        courseId: req.body.courseId,
        scheduleId: req.body.coursscheduleIdeId,
        userDisciplines: req.body.disciplines
    });
    enrollment.save(error => {
        if (error) res.status(500).send(error);
        res.status(201).json({
            message: 'Enrollment created successfully',
            enrollment
        });
    });
}