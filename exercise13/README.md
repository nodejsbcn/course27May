# 13. Filter and formatting responses

## 13.1. Introduction.
One of the cool features of loopback is that you can define filters, sorting or include relations in the responses.

Go to the explorer, and get the messages with this in the filter parameter:

```javascript
{ "order":  ["created DESC"], "include": ["responses", "author"], "where" : { "parentId": { "exists": false }} } 
```

![Filter](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise13/screenshots/screenshot01.png)

If you check the responses you'll find several changes:
- The messages will come from more recent to older ones. 
- Each message will include its responses, ordered ascending.
- The messages that are responses to other messages will not appear in the root.

## 13.2. Install lodash

One of the best javascript libaries ever.
```sh
$ npm install --save lodash
```

## 13.3. Add a hook to the before method of find to add the filter.

In Message, require the lodash library
```javascript
var _ = require('lodash');
```

Also, add the code for the hook

```javascript
    Message.beforeRemote('find', function(ctx, instance, next) {
        if (!ctx.args.filter) {
            ctx.args.filter = {};
        }
        ctx.args.filter.include = [ "responses", "author" ];
        if (!ctx.args.filter.where) {
            ctx.args.filter.where = {};
        }
        ctx.args.filter.where = _.merge(ctx.args.filter.where, { parentId: { exists : false }});
        ctx.args.filter.order = "created DESC"
        next();
    });
```