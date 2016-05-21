module.exports = function(Person) {
    Person.disableRemoteMethod('__create__accessTokens', false);
    Person.disableRemoteMethod('__delete__accessTokens', false);
    Person.disableRemoteMethod('__destroyById__accessTokens', false);
    Person.disableRemoteMethod('__updateById__accessTokens', false);
    Person.disableRemoteMethod('__count__accessTokens', false);
    Person.disableRemoteMethod('__findById__accessTokens', false);
    Person.disableRemoteMethod('__get__accessTokens', false);
    Person.disableRemoteMethod('createChangeStream', true);
    
    Person.beforeRemote('*.__create__messages', function(ctx, instance, next) {
       var body = ctx.args.data;
       var now = new Date();
       var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
       body.created = now_utc;
       next(); 
    });
    
    Person.whoami = function(callback) {
        callback();
    }
    
    function getAuthenticationError() {
      var error = new Error();
      error.statusCode = 401;
      error.message = 'Authorization Required';
      error.code = 'AUTHORIZATION_REQUIRED';
      return error;        
    }
    
    Person.afterRemote('whoami', function(context, model, next) {
        var userId = context.req.accessToken.userId;
        if (!userId) {
            return next(getAuthenticationError());
        }
        Person.findOne({ where: { id: userId}}, function(error, item) {
            if (error) {
                return next(error);
            }
            if (!item) {
                return next(getAuthenticationError());
            }
            context.result = item;
            next();
        })
    });
};
