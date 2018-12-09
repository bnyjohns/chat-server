const constants = require('../types/constants');
const { getAllMessages } = require('../data/message-store');

const definition = `receiveMessage(from: String!, to: String!): ReceiveMessageResponse!`;

const resolver = {
    subscribe: function(obj, params, { pubsub }){
        const channel = `${constants.MESSAGE_RECEIEVED}-${params.from}-${params.to}`;
        const asyncIterator = pubsub.asyncIterator([channel]);
        pubsub.publish(channel, { receiveMessage: { initialPush: true, receivedMessage: getAllMessages(params.from, params.to) } });
        return asyncIterator;
    }
}

module.exports = {
    definition,
    resolver
}