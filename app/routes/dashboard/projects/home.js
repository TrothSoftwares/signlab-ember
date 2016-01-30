import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return Ember.RSVP.hash({
      projects: this.store.findAll('project' , {reload: true})
    });
  },


  setupController(controller, models) {
    controller.setProperties(models);
  },

actions:{

}






});
