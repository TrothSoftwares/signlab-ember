import Ember from 'ember';


export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({  // RSVP.hash for resolving multiple models, The setupController will only work until all promises resolved.
      project: this.modelFor('projects.project'),
      customers: this.store.findAll('customer'),
      agents: this.store.findAll('agent'),
      enquiries: this.store.findAll('enquiry'),
      itemtypes: this.store.findAll('itemtype'),
      jobtypes: this.store.findAll('jobtype'),
      items: this.store.findAll('item'),
      quotations: this.store.findAll('quotation')

    });
  },


  setupController(controller, models) {

    controller.setProperties(models); // For setting all models to access in seperate variable names


    var enqs = models.project.get('enquiries');
    var count = enqs.get('length');
    var currentEnquiry = enqs.objectAt(count-1);

    // TODO:150 currentEnquiry is static here ^^ look above
    controller.set('currentEnquiry',currentEnquiry);



  },
});
