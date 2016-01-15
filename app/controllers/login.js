import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),


  isLoginButtonDisabled: Ember.computed('email', function() {
    return Ember.isEmpty(this.get('email'));
  }),

  actions: {
    authenticate(){
      var controller = this;
      this.get('session').authenticate('authenticator:devise', this.get('email'), this.get('password')).then(function(result){
        console.log(result);


        });
    }
  }
});
