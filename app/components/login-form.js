import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),

  actions: {
    authenticate: function() {
      let { identification, password } = this.getProperties('identification', 'password');
      return this.get('session').authenticate('authenticator:devise', identification, password).then(function(){
        console.log('authenticated called');
        this._super(transition)
        // this.transitionTo('dashboard'); // can't call on undefined
      }).catch((reason) => {
        this.set('errorMessage', reason.error);
      });
    }
  }
});
