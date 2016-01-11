import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),

  actions: {
    authenticate(){
      var controller = this;
      this.get('session').authenticate('authenticator:devise', this.get('email'), this.get('password')).then(function(){
        controller.transitionToRoute('dashboard.projects.home'); 
      });
    }
  }
});
