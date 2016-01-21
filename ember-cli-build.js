/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-cli-preloader': {
     paths: {
       html: 'app/preloader/preloader.html',
       css: 'app/preloader/preloader.css',
     }
   }
  });


  app.import('bower_components/bootstrap/dist/css/bootstrap.css');
  app.import('bower_components/bootstrap/dist/css/bootstrap.css.map',{ destDir: 'assets' });
  app.import('bower_components/select2/select2-bootstrap.css');
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', { destDir: 'fonts' });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', { destDir: 'fonts' });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', { destDir: 'fonts' });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', { destDir: 'fonts' });
  app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', { destDir: 'fonts' });
  app.import('bower_components/bootstrap/dist/js/bootstrap.js'  ,  { destDir: 'javascripts' });


  app.import('bower_components/metro/build/css/metro.min.css');
  app.import('bower_components/metro/build/css/metro-icons.min.css');
  app.import('bower_components/metro/build/css/metro-schemes.min.css');
  app.import('bower_components/metro/build/js/metro.min.js' ,  { destDir: 'javascripts' });
  app.import('bower_components/metro/build/fonts/metro.eot', { destDir: 'fonts' });
  app.import('bower_components/metro/build/fonts/metro.svg', { destDir: 'fonts' });
  app.import('bower_components/metro/build/fonts/metro.ttf', { destDir: 'fonts' });
  app.import('bower_components/metro/build/fonts/metro.woff', { destDir: 'fonts' });



  app.import("vendor/custom.js" ); //file located in web app
  app.import('bower_components/moment/moment.js');
  app.import('bower_components/moment/locale/de-at.js');
  app.import('bower_components/pikaday/pikaday.js');
  app.import('bower_components/pikaday/css/pikaday.css');














  return app.toTree();
};
