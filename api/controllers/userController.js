var User    = require('../models/user');

exports.getUsers = function(req,res){
    User.find({}, (err, users) => {
        if (err) res.status(500).send(error)
        res.status(200).json(users);
    });
}

exports.getUser = function(req,res){
    User.findById(req.param.id, (err, users) => {
        if (err) res.status(500).send(error)
        res.status(200).json(users);
    });
}

exports.insertUser = function (req, res){
    let user = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    });
    user.save(error => {
        if (error) res.status(500).send(error);
        res.status(201).json({
            message: 'User created successfully',
            user
        });
    });
}

exports.login = function(req,res){
    User.findOne({"email": req.body.email}, (err, user) => {
        if (err) {
            res.status(500).send(error)
        }else{
            console.log(req.body.password);
            console.log(user.password);
            if (req.body.password == user.password){
                res.status(200).json(user);    
            }else{
                res.status(500);    
            }
        }
        
    });
}