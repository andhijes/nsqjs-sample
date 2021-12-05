const nsq = require('nsqjs');
const { NSQ_ENV } = require('./constants');

const reader = new nsq.Reader(NSQ_ENV.TOPIC, NSQ_ENV.CHANNEL, {
    lookupdHTTPAddresses: NSQ_ENV.LOOKUP_HOST
});

reader.connect();

reader.on('message', (msg) => {
    console.log('Receive message [%s]: %s', msg.id, msg.body.toString());
    msg.finish();
});

console.log('listening')