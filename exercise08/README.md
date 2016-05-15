# 8. Adding a Middleware for redirecting to https.
Middleware refers to functions executed when HTTP requests are made to REST endpoints. Since LoopBack is based on Express, LoopBack middleware is the same as Express middleware.  However, LoopBack adds the concept of middleware phases, to clearly define the order in which middleware is called.  Using phases helps to avoid ordering issues that can occur with standard Express middleware.
# 8.1. Create the middleware at *server/middleware/https-redirect/index.js*
```javascript
module.exports = function(app) {
  return function(req, res, next) {
    var httpOnly = process.env.NODE_HTTP_ONLY || false;
    if (!req.secure && !httpOnly) {
      var httpsPort = app.get('https-port');
      var parts = req.get('host').split(':');
      var host = parts[0] || '127.0.0.1';
      return res.redirect('https://' + host + ':' + httpsPort + req.url);
    }
    next();
  };
};
```
It's very simple. Receives a loopback app as paramter. For each request, test if we must redirect. If we must redirect, build the url.

# 8.2. Add an *https-port* at *config.json* different from the http port:
![Add https-port](https://raw.githubusercontent.com/nodejsbcn/course27May/master/exercise08/screenshots/screenshot01.png)

# 8.3. Rewrite the server.js in order to use the middleware, and take into account the new port.
```javascript
var loopback = require('loopback');
var boot = require('loopback-boot');
var https = require('https');
var http = require('http');
var sslConfig = require('./private/ssl-config');
var httpsRedirect = require('./middleware/https-redirect');

var app = module.exports = loopback();
app.use(httpsRedirect(app));

function showExplorerUrl(baseUrl) {
  if (app.get('loopback-component-explorer')) {
    console.log('Browse your REST API at %s%s', baseUrl, 
      app.get('loopback-component-explorer').mountPath);
  }
} 

app.start = function() {
  var httpOnly = process.env.NODE_HTTP_ONLY || false;
  var httpsPort = app.get('https-port');
  var port = app.get('port');
  var host = app.get('host');
  http.createServer(app).listen(port, function() {
    var httpUrl = 'http://'+host+':'+port;
    if (httpOnly) {
      app.emit('started');
      console.log('Loopback server listening @ %s%s', httpUrl, '/');
      showExplorerUrl(httpUrl);
    } else {
      var httpsUrl = 'https://'+host+':'+httpsPort;
      https.createServer(sslConfig.credentials, app).listen(httpsPort, function() {
        app.emit('started');
        console.log('Loopback server redirecting @ %s%s', httpUrl, '/');
        console.log('Loopback server listening @ %s%s', httpsUrl, '/');
        showExplorerUrl(httpsUrl);
      })
    }   
  });  
}

boot(app, __dirname, function(err) {
  if (err) throw err;
  if (require.main === module)
    app.start();
});
```
# 8.4. Run the app
Now when you navigate to the http url, you'll be redirected to the https equivalent.
