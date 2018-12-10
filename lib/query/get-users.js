const userStore = require('../data/user-store');

const definition = `
getUsers : [String!]!
`;

const resolver = async (obj, params, context) => {
    return userStore.getUsers();
};

// const definition = `
// getUsers(currentUser: String) : [User!]!
// `;

// const resolver = async (obj, params, context) => {
// 	let result = userStore.getUsers();
// 	const currentUser = params.currentUser;
// 	if(currentUser){
// 		result = result.filter(u => u !== currentUser);
// 	}
// };

module.exports = {
	definition,
	resolver,
};
