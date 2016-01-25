import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      projects: this.store.findAll('project'),
      customers: this.store.findAll('customer'),
      agents: this.store.findAll('agent'),
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },
});
