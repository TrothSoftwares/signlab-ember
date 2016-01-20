import Ember from 'ember';

export default Ember.Route.extend({

  session: Ember.inject.service('session'),
    access: [ 'admin' ],
      beforeModel: function() {
          if (this.get('access').contains(this.get('session.data.authenticated.role'))) {
                    return true;
          }
          this.notifications.addNotification({
            message: 'Sorry, You are cannot access this page' ,
            type: 'error',
            autoClear: true
          });
          this.transitionTo('dashboard.projects.home'); // or whatever
      },

  model: function() {
    return Ember.RSVP.hash({  // RSVP.hash for resolving multiple models, The setupController will only work until all promises resolved.
      project: this.modelFor('dashboard.projects.project'),


    });
  },


  setupController(controller, models) {
    controller.setProperties(models); // For setting all models to access in seperate variable names
  }

});
