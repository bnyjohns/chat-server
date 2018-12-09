const users = [];

const getUsers = function(){
    return users;
}

const addUser = function(user){
    if(users.indexOf(user) > -1)
        throw new Error('user already exists');
    users.push(user);
}

const removeUser = function(user){
    users.splice(users.indexOf(user), 1);
}

module.exports = {
    getUsers,
    addUser,
    removeUser
}