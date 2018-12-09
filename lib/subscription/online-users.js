const constants = require('../types/constants');
const { getUsers } = require('../data/user-store');

const definition = `onlineUsers: [String!]!`;

const resolver = {
    subscribe: function(obj, params, { pubsub }){
        const channel = `${constants.ONLINE_USERS}`;        
        const asyncIterator = pubsub.asyncIterator([channel]);
        pubsub.publish(channel, { onlineUsers: getUsers() });
        return asyncIterator;
    }
}

module.exports = {
    definition,
    resolver
}