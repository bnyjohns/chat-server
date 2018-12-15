const userStore = require('../data/user-store');

const definition = `
getUsers : [User!]!
`;

const resolver = async (obj, params, context) => {
    return userStore.getUsers();
};

module.exports = {
	definition,
	resolver,
};
