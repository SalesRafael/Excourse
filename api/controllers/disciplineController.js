var Discipline    = require('../models/discipline');

exports.getDisciplines = function(req,res){
    Discipline.find({}, (err, disciplines) => {
        if (err) res.status(500).send(error)
        res.status(200).json(disciplines);
    });
}

exports.getDiscipline = function(req,res){
    Discipline.findById(req.param.id, (err, disciplines) => {
        if (err) res.status(500).send(error)
        res.status(200).json(disciplines);
    });
}

exports.insertDiscipline = function (req, res){
    let discipline = new Discipline({
        name: req.body.name,
        schedule:  req.body.schedule,
        difficulty:  req.body.difficulty,
        teacherId: req.body.teacherId
    });
    discipline.save(error => {
        if (error) res.status(500).send(error);
        res.status(201).json({
            message: 'Discipline created successfully',
            discipline
        });
    });
}