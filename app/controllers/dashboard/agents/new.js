import Ember from 'ember';

export default Ember.Controller.extend({

  isEditAgentButtonDisabled: Ember.computed('model.name',  function() {
    return Ember.isEmpty(this.get('model.name'));
  }),

  actions: {

    editAgent: function() {
      var controller = this;
      var agent = this.store.createRecord('agent', {
        name :this.get('model.name'),
        contactname :this.get('model.contactname'),
        contactno :this.get('model.contactno'),
        othcontactno :this.get('model.othcontactno'),
        othrefdetails:this.get('model.othrefdetails'),
        // TODO:60 fix project_id relationship ; 500 error comming in rails after save
      });
      agent.save().then(function(){
        controller.set('model.name','');
        controller.set('model.contactname','');
        controller.set('model.contactno','');
        controller.set('model.othcontactno','');
        controller.set('model.othrefdetails','');
        controller.transitionToRoute('dashboard.agents.agent' , agent);
      }).catch(function(){
        controller.notifications.addNotification({
          message: 'Sorry, cant save at the moment !' ,
          type: 'error',
          autoClear: true
        });
      });
    },
  }
});
