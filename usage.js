// Download the Node helper library from twilio.com/docs/node/install
// These are your accountSid and authToken from https://www.twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const args = process.argv.slice(2);
const client = require('twilio')(accountSid, authToken);

// To use this script type `node usage.js 2017-09-01 2017-10-01 sms`
var query = { 
    startDate: args[0],
    endDate: args[1],
    category: [args[2]]
  }

client.usage.records.list(query, function(err, data) {
    data.forEach(function(record) {
      console.log(`Type: ${record.description}`);
      console.log(`Total Cost: $${record.price}`);
      console.log(`Count: ${record.count}`);
    });
});