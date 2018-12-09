'use-strict';

const type = `
	type ReceiveMessageResponse{
		initialPush: Boolean
		receivedMessage: [ReceivedMessage!]!
	}
	"""
	## ReceivedMessage
	"""
	type ReceivedMessage {
        from: String!
        to: String!
		content: String!
		dateTime: String!
	}
`;

module.exports = {
	type,
};
