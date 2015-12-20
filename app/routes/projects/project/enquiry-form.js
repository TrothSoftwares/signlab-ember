import Ember from 'ember';


export default Ember.Route.extend({
  model: function() {

    // return this.store.findAll('customer');
    return Ember.RSVP.hash({
      project: this.modelFor('projects.project'),
      customers: this.store.findAll('customer'),
      agents: this.store.findAll('agent'),
      enquiries: this.store.findAll('enquiry'),
      itemtypes: this.store.findAll('itemtype'),
      jobtypes: this.store.findAll('jobtype'),
      items: this.store.findAll('item')

    });
  },


  setupController(controller, models) {
    
    controller.setProperties(models);


    var enqs = models.project.get('enquiries');
    var count = enqs.get('length');
    var currentEnquiry = enqs.objectAt(count-1);

    // FIXME: currentEnquiry is static here ^^ look above
    controller.set('currentEnquiry',currentEnquiry);
  },








});
