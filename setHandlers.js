// Download the Node helper library from twilio.com/docs/node/install
// These are your accountSid and authToken from https://www.twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const args = process.argv.slice(2);
const client = require('twilio')(accountSid, authToken);

// Use this by typing into shell: `node setHandlers.js <number_sid> <voice_url> <sms_url>`

client.incomingPhoneNumbers(args[0])
  .update({
    voiceUrl: args[1],
    smsUrl: args[2],
  })
  .then((number) => console.log(number.voiceUrl))
  .catch((err) => console.log(err));