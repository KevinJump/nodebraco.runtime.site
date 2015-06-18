var fs = require('fs');
var path = require('path');
var jf = require('jsonfile');

runtimeProvider = function() {};

runtimeProvider.prototype.routes = [] ;

runtimeProvider.prototype.GetByUrl = function(url, callback)
{
  var contentFile = '../home' + url + 'content.json';
  var filepath = path.join(__dirname, contentFile);
  var result = null;

  console.log('>> loading' + contentFile)
  jf.readFile(filepath, function(err, obj)
  {
    if (err) {
      callback(err, null);
      return ;
    }

    callback(null, obj);
  });
};

runtimeProvider.prototype.Setup = function()
{
  // if there was anything you wanted to do at the begining....
  console.log('setup');
};

new runtimeProvider().Setup();
exports.runtimeProvider = runtimeProvider;
