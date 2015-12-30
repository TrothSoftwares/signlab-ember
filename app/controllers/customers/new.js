import Ember from 'ember';
import EmberValidations from 'ember-validations';




export default Ember.Controller.extend(EmberValidations,{
  validations: {
     'model.name': {
       presence: true,
       length: { minimum: 5 }
     },

   },





  actions: {
      editCustomer: function() {
      var controller = this;
      var customer = this.store.createRecord('customer', {
        name :this.get('model.name'),
        contactname :this.get('model.contactname'),
        contactno :this.get('model.contactno'),
        othcontactno :this.get('model.othcontactno'),
        othrefdetails:this.get('model.othrefdetails'),
        // FIXME: fix project_id relationship ; 500 error comming in rails after save
      });
      customer.save().then(function(){
         controller.set('model.name','');
         controller.set('model.contactname','');
         controller.set('model.contactno','');
         controller.set('model.othcontactno','');
         controller.set('model.othrefdetails','');
        controller.transitionToRoute('customers.customer' , customer);
      });
    },
  }
});
