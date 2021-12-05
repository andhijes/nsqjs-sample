const nsq = require('nsqjs');
const { NSQ_ENV } = require('./constants');

const MESSAGE_TOPIC = 'message topic';
let startIteration = 0;
let nIteration = 10;

const writerFunc = (topic, messageTopic) => {
    const w = new nsq.Writer(NSQ_ENV.HOST, NSQ_ENV.PUB_PORT);
    w.connect();
    
    const iterateMessageTopic = `${messageTopic} number ${startIteration}`;
    w.on('ready', () => {
        w.publish(topic, iterateMessageTopic, (error) => {
            if(error) {
                console.error('error: ', error.message);
                console.log(`error in topic: ${iterateMessageTopic}`);
            }
            w.close();
        });
        startIteration ++;
    });

    w.on('closed', () => {
        console.log('writer closed');
    });

    console.log( `message topic: ${iterateMessageTopic} published`);

    if (startIteration === nIteration) {
        clearInterval(intervalTest);
    }
}

let intervalTest =  setInterval(writerFunc, 1000, NSQ_ENV.TOPIC, MESSAGE_TOPIC);
