# 7. Setup SSL
## 7.1. Generate the certificate
### 7.1.1. Enter the folder */server/private* (create it if doesn't exist).
```
$ cd sendacrow/server/private
```
### 7.1.2. Now you can generate the certificate manually or used the provided sh. 
You'll be asked for information about the certificate
![Generate certificate](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise07/screenshots/screenshot01.png)

### 7.1.3. After all the process, you must have the certificate.pem inside the folder
![Check certificate](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise07/screenshots/screenshot02.png)

## 7.2. Create the code to load the certifiate. 
### 7.2.1. Create a file *ssl-config.js*
### 7.2.2. The file must contain this code:

```javascript
var crypto = require('crypto');
var fs = require("fs");
var path = require('path');

exports.privateKey = fs.readFileSync(path.join(__dirname, 'privatekey.pem')).toString();
exports.certificate = fs.readFileSync(path.join(__dirname, 'certificate.pem')).toString();
exports.credentials = {key: exports.privateKey, cert: exports.certificate};
```

### 7.2.3. Now we have to change the server.js file in order to create an https server.
We will have a *NODE_HTTP_ONLY* environment variable to switch between http and https.
```javascript
var loopback = require('loopback');
var boot = require('loopback-boot');
var https = require('https');
var http = require('http');
var sslConfig = require('./private/ssl-config');

var app = module.exports = loopback();

app.start = function() {
  var httpOnly = process.env.NODE_HTTP_ONLY || false;
  var host = app.get('host');
  var port = app.get('port');
  var server = (httpOnly ? http.createServer(app) : 
    https.createServer(sslConfig.credentials, app));
  server.listen(port, function() {
    var baseUrl = (httpOnly ? 'http://' : 'https://')+host+':'+port;
    app.emit('started', baseUrl);
    console.log('Loopback server listening @ %s%s', baseUrl, '/');
    if (app.get('loopback-component-explorer')) {
      console.log('Browse your REST API at %s%s', baseUrl, 
        app.get('loopback-component-explorer').mountPath);
    }
  });  
}

boot(app, __dirname, function(err) {
  if (err) throw err;
  if (require.main === module)
    app.start();
});
```
### 7.2.4. Run the application
Now we will see that the route is using https instead of http.
![Start app](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise07/screenshots/screenshot03.png)






 




