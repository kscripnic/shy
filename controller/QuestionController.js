var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

var VerifyToken = require('../helper/VerifyToken');

router.use(bodyParser.urlencoded({ extended: true }));
var Question = require('../model/Question');

router.post('/', VerifyToken, function (req, res) {
    Question.create({
        title: req.body.title,
        content: req.body.content,
        language: req.body.language,
        user: req.userId
    }, function (err, question) {
        if (err) return res.status(500).send("There was a problem registering the question`.");
        return res.status(200).send(question);
    })
});


module.exports = router;