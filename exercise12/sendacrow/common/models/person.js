module.exports = function(Person) {
    Person.disableRemoteMethod('__create__accessTokens', false);
    Person.disableRemoteMethod('__delete__accessTokens', false);
    Person.disableRemoteMethod('__destroyById__accessTokens', false);
    Person.disableRemoteMethod('__updateById__accessTokens', false);
    Person.disableRemoteMethod('__count__accessTokens', false);
    Person.disableRemoteMethod('__findById__accessTokens', false);
    Person.disableRemoteMethod('__get__accessTokens', false);
    Person.disableRemoteMethod('createChangeStream', true);
    
    Person.prototype.subscribe = function(personId,callback) {
        console.log(personId);
        callback(null, personId);
    }

};
