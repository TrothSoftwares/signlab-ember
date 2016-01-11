/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'signlab-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

// TODO: SELF * SHOULD BE SAFE PROOFED: about the connect src and cors configs.
    contentSecurityPolicy: {
    'default-src': "'none' *",
    'script-src': "'self' *",
    'font-src': "'self' *",
    'connect-src': "'self' *",
    'img-src': "'self' data: *  ",
    'media-src': "'self' *",
	  'style-src': "'self' 'unsafe-inline' *",
	},
  'ember-cli-notifications': {
    icons: 'bootstrap'
  },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };





   ENV['simple-auth-devise'] = {
     tokenAttributeName: 'token',
     identificationAttributeName: 'email',
     serverTokenEndpoint:  ENV.APP.host  + '/users/sign_in',
     authorizer: 'devise',
     crossOriginWhitelist: ['*'],
     };







  if (environment === 'development') {
     ENV.APP.host =  'http://localhost:3000';
     ENV.APP.LOG_RESOLVER = false;
     ENV.APP.LOG_ACTIVE_GENERATION = false;
     ENV.APP.LOG_TRANSITIONS = false;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = false;
     ENV.APP.LOG_VIEW_LOOKUPS = false;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.host = 'http://signlab-rails.herokuapp.com';
  }

  return ENV;
};
