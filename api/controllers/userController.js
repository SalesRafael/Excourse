var User    = require('../models/user');
var crypto = require('crypto');


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
    
    var saltTemp = crypto.randomBytes(16).toString('hex');
    var hashTemp = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, 'sha512').toString('hex');
    
    let user = new User({
        name: req.body.name,
        cpf: req.body.cpf,
        salt : saltTemp,
        hash : hashTemp

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
    User.findOne({"cpf": req.body.cpf}, (err, user) => {
        if (err) {
            res.status(500).send(error)
        }else{    
            var hash = crypto.pbkdf2Sync(req.body.password, user.salt, 1000, 64, 'sha512').toString('hex');
            if (this.hash === hash){
                res.status(200).json(user);    
            }else{
                res.status(500);    
            }
        }
        
    });
}