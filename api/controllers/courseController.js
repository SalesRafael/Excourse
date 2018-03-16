var Course    = require('../models/course');

exports.getCourses = function(req,res){
    Course.find({}).populate('disciplines').exec( function (err, courses){
        if (err) res.status(500).send(err)
        res.status(200).json(courses);
    });
}

exports.getCourse = function(req,res){
    Course.findById(req.params.id).populate('disciplines').exec( function (err, course){
        if (err) res.status(500).send(err)
        res.status(200).json(courses);
    });
}

exports.insertCourse = function (req, res){
    let course = new Course({
        name: req.body.name,
        disciplines: req.body.disciplines
    });
    course.save(error => {
        if (error) res.status(500).send(error);
        res.status(201).json({
            message: 'Course created successfully',
            course
        });
    });
}