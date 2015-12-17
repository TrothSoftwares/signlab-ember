import Ember from 'ember';

export default Ember.Controller.extend({


  actions: {

    createAgent: function(params) {


      var controller = this;
      var agent = this.store.createRecord('agent', {
        name: params.name,
        contactname: params.contactname,
        contactno: params.contactno,
        othcontactno: params.othcontactno,
        othrefdetails: params.othrefdetails,
        project_id: 1,
        // FIXME: fix project_id relationship ; 500 error comming in rails after save
      });
      agent.save().then(function(){


        controller.transitionToRoute('agents.agent' , agent);
      });
    },
    
  }
});
