var Support    = require('../models/support');

exports.getSupports = function(req,res){
    Support.find({}, (err, supports) => {
        if (err) res.status(500).send(err)
        res.status(200).json(supports);
    });
}

exports.getSupport = function(req,res){
    Support.findById(req.params.id, (err, support) => {
        if (err) res.status(500).send(err)
        res.status(200).json(support);
    });
}

exports.insertSupport = function (req, res){
        
    let support = new Support({
        message: req.body.message
    });
    support.save(error => {
        if (error) res.status(500).send(error);
        res.status(201).json({
            message: 'Support created successfully'
        });
    });
}