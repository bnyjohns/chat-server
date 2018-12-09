const userStore = require('../data/user-store');
const constants = require('../types/constants');

const definition = `removeUser(user: String!): [String!]`;

const resolver = async (obj, params, { pubsub }) => {
    const user = params.user;
    userStore.removeUser(user);
    const users = userStore.getUsers();
    pubsub.publish(constants.ONLINE_USERS, { onlineUsers: users });
    return users;
}

module.exports = {
    definition,
    resolver
}