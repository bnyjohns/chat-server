module.exports = `
    ${require('../mutation').type}
    ${require('../query').type}
    ${require('../subscription').type}
    ${require('./received-message').type}
    ${require('./user').type}
`;
