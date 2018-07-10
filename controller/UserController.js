var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require('../helper/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
var User = require('../model/User');

// UPDATES A SINGLE USER IN THE DATABASE
// Added VerifyToken middleware to make sure only an authenticated user can put to this route
router.put('/:id', VerifyToken, function (req, res) {
    if(req.params.id != req.userId) return res.status(500).send("There was a problem updating the user.");
    
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});


module.exports = router;