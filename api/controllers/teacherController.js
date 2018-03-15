var Teacher    = require('../models/teacher');

exports.getTeachers = function(req,res){
    Teacher.find({}, (err, teachers) => {
        if (err) res.status(500).send(error)
        res.status(200).json(teachers);
    });
}

exports.getTeacher = function(req,res){
    Teacher.findById(req.param.id, (err, teachers) => {
        if (err) res.status(500).send(error)
        res.status(200).json(teachers);
    });
}

exports.insertTeacher = function (req, res){
    let teacher = new Teacher({
        name: req.body.name,
    });
    teacher.save(error => {
        if (error) res.status(500).send(error);
        res.status(201).json({
            message: 'Teacher created successfully',
            teacher
        });
    });
}