var tokenBlacklist = require('../model/TokenBlacklist');

function checkInvalid(token, callback) {
    tokenBlacklist.find({token: token}, function (err, res) {
        if (err || res.length) {
            return callback(true);
        } else {
            return callback(false);
        }
    })
}

function insert(token, callback) {
    tokenBlacklist.create({token: token}, callback);
}

module.exports = {
    checkInvalid: checkInvalid,
    insert: insert
}