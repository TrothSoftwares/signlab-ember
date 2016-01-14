import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({  // RSVP.hash for resolving multiple models, The setupController will only work until all promises resolved.
      project: this.modelFor('dashboard.projects.project'),
      customers: this.store.findAll('customer'),
    });
  },


  setupController(controller, models) {
    controller.setProperties(models); // For setting all models to access in seperate variable names
  }
});
