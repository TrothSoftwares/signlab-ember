import Ember from 'ember';

export default Ember.Controller.extend({


  actions: {
      editAgent: function() {
      var controller = this;
      var agent = this.store.createRecord('agent', {
        name :this.get('model.name'),
        contactname :this.get('model.contactname'),
        contactno :this.get('model.contactno'),
        othcontactno :this.get('model.othcontactno'),
        othrefdetails:this.get('model.othrefdetails'),
        // FIXME: fix project_id relationship ; 500 error comming in rails after save
      });
      agent.save().then(function(){
         controller.set('model.name','');
         controller.set('model.contactname','');
         controller.set('model.contactno','');
         controller.set('model.othcontactno','');
         controller.set('model.othrefdetails','');
        controller.transitionToRoute('agents.agent' , agent);
      });
    },
  }
});
