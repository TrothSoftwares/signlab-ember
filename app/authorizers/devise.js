import DeviseAuthorizer from 'ember-simple-auth/authorizers/devise';

export default DeviseAuthorizer.extend({
  actions: {

    authorize: function(){
      this.get('session').authorize('authorizer:devise', (headerName, headerValue) => {
        xhr.setRequestHeader(headerName, headerValue);
      });
    }
  }


});
