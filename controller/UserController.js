var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require('../helper/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
var User = require('../model/User');


router.put('/:id', VerifyToken, function (req, res) {
    if(req.params.id != req.userId) return res.status(500).send("There was a problem updating the user.");
    
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});



router.get('/', VerifyToken, function(req, res) {

    User.find({_id: req.userId}, { password: 0 }).populate('questions').exec(    
        function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });

});


module.exports = router;