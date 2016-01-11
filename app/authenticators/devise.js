import ENV from '../config/environment';
import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: ENV.APP.host + '/users/sign_in'

});

// import Devise from 'ember-simple-auth/authenticators/devise';
//
// export default Devise.extend({
//   serverTokenEndpoint: ENV.APP.host
// });
