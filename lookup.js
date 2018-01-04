// Download the Node helper library from twilio.com/docs/node/install
// These are your accountSid and authToken from https://www.twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// To use this script type `node lookup.js +15108675309`
const args = process.argv.slice(2);

const client = require('twilio')(accountSid, authToken);

args.forEach( num => {
  client.lookups.v1
    .phoneNumbers(num)
    .fetch({type: 'caller-name'})
    .then( number => console.log(number))
    .catch( err => console.log(err));
})
  
  
  