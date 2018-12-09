const userStore = require('../data/user-store');
const constants = require('../types/constants');

const definition = `addUser(user: String!): [String!]`;

const resolver = async (obj, params, { pubsub }) => {
    const user = params.user;
    userStore.addUser(user);
    const users = userStore.getUsers();
    pubsub.publish(constants.ONLINE_USERS, { onlineUsers: users });
    return users;
}

module.exports = {
    definition,
    resolver
}