var path = require('path');

var ret = {
  'suites': ['test'],
  'skipUpdateCheck': true,
  'webserver': {
    'pathMappings': []
  },
  'plugins': {
    'local': {
      // "browsers": ["chrome", "firefox"]
      'skipSeleniumInstall': true,
      'browsers': ['chrome']
    }
  }
};

var mapping = {};
var rootPath = (__dirname).split(path.sep).slice(-1)[0];

mapping['/components/' + rootPath +
  '/bower_components'] = 'bower_components';

ret.webserver.pathMappings.push(mapping);

module.exports = ret;
