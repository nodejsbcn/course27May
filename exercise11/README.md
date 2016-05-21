# 11. Adding security

## 11.1. Adding login

Loopback uses the model User in order to do security. If we want to use a distinct model for the users, then we must do that this model inherits from User.
In this case, *Person* model must inherits from *User* instead of *PersistedModel*.

So the first step is to edit *person.json* and change the value of *base* from *PersistedModel* to *User*
![Person inherits User](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise11/screenshots/screenshot01.png)

## 11.2. Removing User from API

You must edit *model-config.js* and add *"public": false* to the definition of *User*.
![Remove User](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise11/screenshots/screenshot02.png)

## 11.3. Adding ACL tables to mongo

Edit *model-config-js* and change the data source of *User*, *AccessToken*, *ACL*, *RoleMapping* and *Role* from *db* to *mongo*.
![Change ACL tables datasource](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise11/screenshots/screenshot03.png)

## 11.4. First login
### 11.4.1. Run the application

### 11.4.2. Go to the People POST and create a new user
![Create user](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise11/screenshots/screenshot04.png)

### 11.4.3. Go to the People/login endpoint and enter the email and password of the created user
![Login](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise11/screenshots/screenshot05.png)

### 11.4.4. The response will have the authentication token. Set it in the explorer
![Set token](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise11/screenshots/screenshot06.png)

### 11.4.5. The only person that can modify a message is the owner
In order to do this, we must understand ACL. In this case we will do several things:
- Nobody can write using Message endpoints. 
- Nobody can access Person endpoints.
- Everybody can read Person endpoints. 
- Only the owner can write Person endpoints

To do this, we use the *slc loopback:acl* command.
![Nobody write Message](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise11/screenshots/screenshot07.png)
![Nobody access Person](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise11/screenshots/screenshot08.png)
![Everybody read Person](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise11/screenshots/screenshot09.png)
![Owner write Person](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise11/screenshots/screenshot10.png)

### 11.4.6. Hiding endpoints

Some of the endpoints are no really wanted to be in the API. In order to do that, the models have the method *disableRemoteMethod*.
This method accepts a method name and a boolean indicating if is static.

Hide methods in Message:
```javascript
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
```

Hide methods in Person:
```javascript
    Person.disableRemoteMethod('__create__accessTokens', false);
    Person.disableRemoteMethod('__delete__accessTokens', false);
    Person.disableRemoteMethod('__destroyById__accessTokens', false);
    Person.disableRemoteMethod('__updateById__accessTokens', false);
    Person.disableRemoteMethod('__count__accessTokens', false);
    Person.disableRemoteMethod('__findById__accessTokens', false);
    Person.disableRemoteMethod('__get__accessTokens', false);
    Person.disableRemoteMethod('createChangeStream', true);
```