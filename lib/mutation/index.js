const definition = `
	mutation: Mutation
`;

const type = `
	type Mutation {
		${require('./add-user').definition}
        ${require('./remove-user').definition}
        ${require('./send-message').definition}
	}
`;

const resolvers = {
    Mutation: {
        addUser: require('./add-user').resolver,
        removeUser: require('./remove-user').resolver,
        sendMessage: require('./send-message').resolver
    }
}

module.exports = {
    definition,
	type,
	resolvers,
};
