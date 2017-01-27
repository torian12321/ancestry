// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    // Major libraries
    jquery    : 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min', // https://github.com/amdjs
    backbone  : 'libs/backbone/backbone-min', // https://github.com/amdjs
    less      : 'libs/less/less-1.7.3',
    jscssp    : 'libs/jscssp/jscssp',
    fixie     : 'libs/fixie/fixie',
	  pagedown  : 'libs/pagedown/converter',

    // Require.js plugins
    text : 'libs/require/text',
    order: 'libs/require/order',

    // Short cuts
    templates  : '../templates',
    project_dir: '../../src/js',
  },
	urlArgs: "bust=" +  (new Date()).getTime()

});

// Let's kick off the application

require([
  'views/app',
  'router',
  'vm',
  'fixie',
  'order!libs/cssbeautify/cssbeautify',
  'order!libs/highlighter/shCore',
  'order!libs/highlighter/shBrushCss'
], function(AppView, Router, Vm){
  var appView = Vm.create({}, 'AppView', AppView);
  appView.render();
  Router.initialize({appView: appView});  // The router now has a copy of all main appview
});

