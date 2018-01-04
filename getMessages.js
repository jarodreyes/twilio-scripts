// Download the Node helper library from twilio.com/docs/node/install
// These vars are your accountSid and authToken from twilio.com/user/account
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var authToken = process.env.TWILIO_AUTH_TOKEN;
var client = require('twilio')(accountSid, authToken);
var _ = require('underscore');

var count = 0;
var unique = [];

var filterOpts = {
    to: '+19804773728',
    dateSent: new Date(2017, 4, 24)
};


client.messages.list(filterOpts, function(err, data) {
    console.log(data);
    data.forEach(function(message) {
        var number = message.from;
        console.log(number);
        var q = _.contains(unique, number);
        if (!q) {
          unique.push(number);
        }
    });
    console.log(unique.length);
});