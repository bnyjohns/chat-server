'use-strict';

const input = `
	"""
	## Message
	"""
	input Message {
        from: String!
        to: String!
		content: String!
		dateTime: String!
	}
`;

module.exports = {
	input,
};
