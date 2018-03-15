var Enrollment = require('../models/enrollment');

exports.getEnrollments = function (req, res) {
    Enrollment.find({}, (err, enrollments) => {
        if (err) res.status(500).send(error)
        res.status(200).json(enrollments);
    });
}

exports.getEnrollment = function (req, res) {
    Enrollment.findById(req.param.id, (err, enrollments) => {
        if (err) res.status(500).send(error)
        res.status(200).json(enrollments);
    });
}

exports.insertEnrollment = function (req, res) {
    let enrollment = new Enrollment({
        userId: req.body.userId,
        courseId: req.body.courseId,
        courseId: req.body.courseId,
        scheduleId: req.body.coursscheduleIdeId,
        disciplines: req.body.disciplines
    });
    enrollment.save(error => {
        if (error) res.status(500).send(error);
        res.status(201).json({
            message: 'Enrollment created successfully',
            enrollment
        });
    });
}