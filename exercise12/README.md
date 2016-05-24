# 12. Creating whoami

We made a way to authenticate and authorizate a user. But we still don't have a method that, once authenticated, we are able to retrieve the user information.

## 12.1. Adding the remote method

We can add remote methods using *slc loopback:remote-method*. In this case we will add the endpoint */whoami* with no parameters and returns an object.

![Add whoami 1](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise12/screenshots/screenshot01.png)
![Add whoami 2](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise12/screenshots/screenshot02.png)

You'll find the information of the method created at *person.json*

![Added whoami](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise12/screenshots/screenshot03.png)

## 12.2. Adding the code to Person

We must add this code:

```javascript
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
```

We create an static method whoami that receives a callback (because no input parameter was defined).
Also, we intercept the afterRemote of this method, to retrieve the user identifier from the request accessToken. From this identifier, we get the user using a query to the model.

## 12.3. Adding execution rights

Now we modify the Person ACL to allow execution to everyone.

![Execution rights](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise12/screenshots/screenshot04.png)

## 12.4. Execute whoami from the explorer to test it

![Execute whoami](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise12/screenshots/screenshot05.png)
