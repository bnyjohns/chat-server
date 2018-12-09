const messageStore = new Map();

const addMessage = function(from, to, message){
    const keys = getKeys(from, to);
    let pushed = false;
    for(let key of keys){
        if(messageStore.has(key)){
            messageStore.get(key).push(message);
            pushed = true;
            break;
        }
    }
    if(pushed === false){
        messageStore.set(keys[0], [message]);
    }       
}

const getKeys = (from, to) => {
    const keys = [];
    keys.push(from + "***" + to);
    keys.push(to + "***" + from);
    return keys;
}

const getAllMessages = function(from, to){
    const keys = getKeys(from, to);
    for(let key of keys){
        if(messageStore.has(key)){
            return messageStore.get(key);
        }
    }
    return [];
}

module.exports = {
    addMessage,
    getAllMessages
}