module.exports = function(Message) {
    
    Message.disableRemoteMethod('create', true);
    Message.disableRemoteMethod('upsert', true);
    Message.disableRemoteMethod('deleteById', true);
    Message.disableRemoteMethod('createChangeStream', true);
    Message.disableRemoteMethod('updateAttributes', false);
    Message.disableRemoteMethod("updateAll", true);
    Message.disableRemoteMethod('__create__responses', false);
    Message.disableRemoteMethod('__delete__responses', false);
    Message.disableRemoteMethod('__destroyById__responses', false);
    Message.disableRemoteMethod('__updateById__responses', false);
    
    Message.beforeRemote('create', function(ctx, instance, next) {
       var body = ctx.args.data;
       var now = new Date();
       var now_utc = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(),  now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());
       body.created = now_utc;
       next(); 
    });
    
    Message.afterRemote('create', function(ctx, instance, next) {
        console.log(instance);
        next();
    });
};
