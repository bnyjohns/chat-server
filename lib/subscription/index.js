const definition = `
subscription: Subscription
`;

const type = `
	type Subscription {
        ${require('./receive-message').definition}
        ${require('./online-users').definition}
	}
`;

const resolvers = {
    Subscription: {
        receiveMessage: require('./receive-message').resolver,
        onlineUsers: require('./online-users').resolver
    }
}

module.exports = {
    definition,
	type,
	resolvers,
};
