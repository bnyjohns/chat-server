const _ = require('lodash');
const users = [];
const crypto = require('crypto');

const getUsers = function(){
    return users.map(u => _.pick(u, 'userName', 'online'));
}

const addUser = function({ userName, password }){
    const hash = crypto.createHash('sha1').update(password).digest('hex');
    const user = users.find(u => u.userName === userName);
    if(user){
        if(user.password === hash){
            user.online = true;
            return;
        }
        else
            throw new Error('incorrect password/user already exists');
    }
    else{
        users.push({userName, password: hash, online: true});
    }
}

const removeUser = function(userName){
    const i = users.findIndex(u => u.userName === userName);
    users.splice(i, 1);
}

const logOffUser = function(userName){
    const user = users.find(u => u.userName === userName);
    if(!user)
        throw new Error(`user ${userName} not found`);
    user.online = false;
}

module.exports = {
    getUsers,
    addUser,
    removeUser,
    logOffUser,
}