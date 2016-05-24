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