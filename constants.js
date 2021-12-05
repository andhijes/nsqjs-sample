require("dotenv").config();

const NSQ_ENV = {
    TOPIC: process.env.NSQ_TOPIC,
    CHANNEL: process.env.NSQ_CHANNEL,
    HOST: process.env.NSQ_HOST,
    LOOKUP_HOST: process.env.NSQ_LOOKUP_HOST,
    PUB_PORT: process.env.NSQ_PUBLISH_PORT,
};

module.exports = Object.freeze({
    NSQ_ENV
});