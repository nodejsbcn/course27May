# 10. Adding hooks

## 10.1. Introduction
Loopback provides 2 kind of hooks: Remote and Operation hooks.
Remote hooks are those related with the endpoints.
Operation hooks are those related with the models.

## 10.2. Adding a created property to the messages.
We need a time reference for the messages, so we are able to sort them.
The first step is to add a new property called *created*

![Add created property](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise10/screenshots/screenshot01.png)

## 10.3. Hooks to the call to the method *create*
We will intercept the before and after create.

```javascript
module.exports = function(Message) {
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
```

## 10.4. Operation hooks

Those are the Operation hooks invoked by PersistedModel
![Operation hooks](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise10/screenshots/screenshot02.png)

Accessing the affected instance
![Affected instance](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise10/screenshots/screenshot03.png)

