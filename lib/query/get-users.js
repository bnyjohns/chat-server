const userStore = require('../data/user-store');

const definition = `
getUsers : [String!]!
`;

const resolver = async (obj, params, context) => {
    return userStore.getUsers();
};

module.exports = {
	definition,
	resolver,
};
