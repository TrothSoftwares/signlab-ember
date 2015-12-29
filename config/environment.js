/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'signlab-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'",
      'connect-src': "'self' *",
      'img-src': "'self'",
      'media-src': "'self'",
      'style-src': "'self' 'unsafe-inline'",


    },
    host: 'http://localhost:3000',

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

  ENV['ember-simple-auth'] = {
    routeAfterAuthentication: 'projects.home',
    routeIfAlreadyAuthenticated: 'projects.home'
  };
  ENV['simple-auth-token'] = {
    // tokenAttributeName: 'token',
    // identificationAttributeName: 'email',
    // serverTokenEndpoint: 'http://localhost:3000/users/sign_in',
    // authorizer: 'authorizer:devise'
    serverTokenEndpoint: 'http://localhost:3000/users/sign_in',
    identificationField: 'username',
    passwordField: 'password',
    tokenPropertyName: 'token',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
    headers: {},
  };

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:token',
    crossOriginWhitelist: ['*']

  };

ENV['simple-auth-token'] = {
    refreshAccessTokens: true,
    timeFactor: 1,
    refreshLeeway: 300 // Refresh the token 5 minutes (300s) before it expires.
  };





  // ENV['simple-auth'] = {
  // authorizer: 'simple-auth-authorizer:devise'
  // };
  //
  // ENV['simple-auth-devise'] = {
  // tokenAttributeName: 'token',
  // identificationAttributeName: 'email'
  // };



  if (environment === 'development') {
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

  }

  return ENV;
};
