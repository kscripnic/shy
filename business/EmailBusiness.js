var EmailHelper = require('../helper/Email');

function ValidateEmail(to, callback) {
    var mailOptions = {
        from: '"Fred Foo ?" <foo@blurdybloop.com>', // sender address
        to: to, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world ?', // plaintext body
        html: '<b>Hello world ?</b>' // html body
    };

    EmailHelper(mailOptions, callback);
}

module.exports = {
    ValidateEmail: ValidateEmail
}