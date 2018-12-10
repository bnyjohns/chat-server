const _ = require('lodash');
const users = [];
const crypto = require('crypto');

const getUsers = function(){
    return users.map(u => u.id);
}

const addUser = function({ id, password }){
    const hash = crypto.createHash('sha1').update(password).digest('hex');
    const user = users.find(u => u.id === id);
    if(user){
        if(user.password === hash)
            return;
        else
            throw new Error('incorrect password/user already exists');
    }
    else{
        users.push({id, password: hash});
    }
}

const removeUser = function(id){
    const i = users.findIndex(u => u.id === id);
    users.splice(i, 1);
}

module.exports = {
    getUsers,
    addUser,
    removeUser
}