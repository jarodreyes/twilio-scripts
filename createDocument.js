// Download the Node helper library from twilio.com/docs/node/install
// These are your accountSid and authToken from https://www.twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const args = process.argv.slice(2);
const Twilio = require('twilio').Twilio;

// Use this by tuping node createDocument.js BoardLED

const client = new Twilio(accountSid, authToken);
const service = client.sync.services('default');

service.documents
  .create({
    uniqueName: args[0],
    data: { led: 'OFF' },
  })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });