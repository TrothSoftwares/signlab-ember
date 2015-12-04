import Ember from 'ember';

export default Ember.Controller.extend({


  actions: {

    createCustomer: function(params) {
      //      var controller = this.get('controller');
      var controller = this;
      var customer = this.store.createRecord('customer', {
        name: params.name,
        contactname: params.contactname,
        contactno: params.contactno,
        othcontactno: params.othcontactno,
        othrefdetails: params.othrefdetails,
        project_id: 1,
        // FIXME: fix project_id relationship ; 500 error comming in rails after save
      });
      customer.save().then(function(){
        controller.transitionToRoute('customers.customer' , customer);
      });
    },
  }
});
