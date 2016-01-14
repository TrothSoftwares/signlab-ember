import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    return Ember.RSVP.hash({  // RSVP.hash for resolving multiple models, The setupController will only work until all promises resolved.
      projects: this.store.findAll('project'),
      customers: this.store.findAll('customer'),
      agents: this.store.findAll('agent'),
    });
},

setupController(controller, models) {
  controller.setProperties(models); // For setting all models to access in seperate variable names
},



});
