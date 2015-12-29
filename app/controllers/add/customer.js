import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {




    createIndividual: function(params) {
//      var controller = this.get('controller');
      //  var route = this;
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
        // route.transitionTo('projects.home');
});
    },

    createWithProject: function() {
      console.log("This is project creation");
    },






    // alertWithClickInController: function(params){
    //   alert(params.alertParam + "With text  Click in contoller");
    // },
  }
});
