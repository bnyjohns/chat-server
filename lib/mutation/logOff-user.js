const userStore = require('../data/user-store');
const constants = require('../types/constants');

const definition = `logOffUser(userName: String!): [User!]!`;

const resolver = async (obj, params, { pubsub }) => {
    userStore.logOffUser(params.userName);
    const users = userStore.getUsers();
    pubsub.publish(constants.ONLINE_USERS, { onlineUsers: users });
    return users;
}

module.exports = {
    definition,
    resolver
}