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