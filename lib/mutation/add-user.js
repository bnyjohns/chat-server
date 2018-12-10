const userStore = require('../data/user-store');
const constants = require('../types/constants');

const definition = `addUser(user: UserInput!): [String!]`;

const resolver = async (obj, params, { pubsub }) => {
    userStore.addUser(params.user);
    const users = userStore.getUsers();
    pubsub.publish(constants.ONLINE_USERS, { onlineUsers: users });
    return users;
}

module.exports = {
    definition,
    resolver
}