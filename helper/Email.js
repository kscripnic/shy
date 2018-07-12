var nodemailer = require('nodemailer');

var config = require('../config');

var transporter = nodemailer.createTransport({
    host: config.email.host,
    port: config.email.port,
    auth: {
        user: config.email.user,
        pass: config.email.pass
    }
});

module.exports = transporter.sendMail;