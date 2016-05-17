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
