// Download the Node helper library from twilio.com/docs/node/install
// These are your accountSid and authToken from https://www.twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// To use this script type `node buyNumber.js US`
const args = process.argv.slice(2);

const client = require('twilio')(accountSid, authToken);

client.availablePhoneNumbers(args[0]).local
  .list()
  .then((data) => {
    const number = data[0];
    return client.incomingPhoneNumbers.create({
      phoneNumber: number.phoneNumber,
    });
  })
  .then((purchasedNumber) => console.log(purchasedNumber.phoneNumber, purchasedNumber.sid));
