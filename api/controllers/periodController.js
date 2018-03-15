var Period    = require('../models/period');

exports.getPeriods = function(req,res){
    Period.find({}, (err, periods) => {
        if (err) res.status(500).send(error)
        res.status(200).json(periods);
    });
}

exports.getPeriod = function(req,res){
    Period.findById(req.param.id, (err, periods) => {
        if (err) res.status(500).send(error)
        res.status(200).json(periods);
    });
}

exports.insertPeriod = function (req, res){
    let period = new Period({
        name: req.body.name,
        dateStart: req.body.dateStart,
        dateEnd: req.body.dateEnd
    });
    period.save(error => {
        if (error) res.status(500).send(error);
        res.status(201).json({
            message: 'Period created successfully',
            period
        });
    });
}