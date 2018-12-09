const { GraphQLServer, PubSub } = require('graphql-yoga');
const GraphQLJSON = require('graphql-type-json');
const bodyParser = require('body-parser');
const query = require('./lib/query');
const types = require('./lib/types');
const inputs = require('./lib/inputs');
const mutation = require('./lib/mutation');
const subscription = require('./lib/subscription');

const typeDefs = `
    scalar JSON
    
    ${types}
    ${inputs}
    
	schema {
        ${query.definition}
        ${mutation.definition}
        ${subscription.definition}
	}
`;

const resolvers = {
    JSON: GraphQLJSON,
    ...query.resolvers,
    ...mutation.resolvers,
    ...subscription.resolvers,
};

const pubsub = new PubSub();
const server = new GraphQLServer({
	typeDefs,
	resolvers,
	context: ({ request }) => ({
        pubsub
	}),
});

server.express.use(bodyParser.json());
server.express.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

server
.start({
    port: 9000,
})
.catch(e => console.log(e));
