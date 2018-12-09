const type = `
	type Query {
        ${require('./get-users').definition}
    }
`;

const definition = `
	query: Query
`;

const resolvers = {
    Query: {
        getUsers: require('./get-users').resolver
    }
}

module.exports = {
    type,
    definition,
    resolvers
}