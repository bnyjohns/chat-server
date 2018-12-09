const messageStore = require('../data/message-store');
const constants = require('../types/constants');

const definition = `sendMessage(message: Message!): Int`;

const resolver = function(obj, params, { pubsub }){
    const { from, to } = params.message;
    pubsub.publish(getChannel(from, to), { receiveMessage: { initialPush: false , receivedMessage: [params.message]} });
    pubsub.publish(getChannel(to, from), { receiveMessage: { initialPush: false , receivedMessage: [params.message]} });
    messageStore.addMessage(from, to, params.message);
}

const getChannel = (from, to) => `${constants.MESSAGE_RECEIEVED}-${from}-${to}`;

module.exports = {
    definition,
    resolver
}