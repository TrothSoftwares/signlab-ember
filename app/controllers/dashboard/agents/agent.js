import Ember from 'ember';

export default Ember.Controller.extend({


  isEditAgentButtonDisabled: Ember.computed('model.name',  function() {
    return Ember.isEmpty(this.get('model.name'));
  }),

  actions: {
    editAgent :function(){
      var controller = this;
      this.toggleProperty('enableEditAgent');
      if(this.model.get('hasDirtyAttributes')){
        this.model.save().catch(function(){
          controller.notifications.addNotification({
            message: 'Sorry, cant save at the moment !' ,
            type: 'error',
            autoClear: true
          });
        });
      }
    },
    //DONE:0 CATCH ERROR: if not deleted due to relationship Data
    //DONE:10 MESSAGE ERROR: That there is a project assigned to this data

    deleteData: function(agent){
      var controller = this;
      agent.destroyRecord().then(function () {
        controller.notifications.addNotification({
          message: 'Agent Deleted!' ,
          type: 'success',
          autoClear: true
        });
      }).catch(function () {
        agent.rollbackAttributes();
        controller.notifications.addNotification({
          message: 'Agent cannot be deleted. This agent may be assigned to some project!' ,
          type: 'error',
          autoClear: true
        });
      });
    }


  }

});
