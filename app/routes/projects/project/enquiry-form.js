import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
// return this.modelFor('projects.project');
return Ember.RSVP.hash({
     project: this.modelFor('projects.project'),
     customers: this.store.findAll('customer'),
     agents: this.store.findAll('agent'),

   });
},


setupController(controller, models) {
   controller.set('project', models.project);
   controller.set('customers', models.customers);
   controller.set('agents', models.agents);

   // or, more concisely:
   // controller.setProperties(models);
 }




});
