import Ember from 'ember';

export default Ember.Controller.extend({

  isCreateAgentButtonDisabled: Ember.computed('agentname',  function() {
     return Ember.isEmpty(this.get('agentname'));
  }),

  isEditAgentButtonDisabled : Ember.computed('project.agent.name',function(){
    return Ember.isEmpty(this.get('project.agent.name'));
  }),

  actions: {
    onSelectAgent(agent) {
      this.set('project.agent', agent);
    },

    openAgentComponent: function() {
      this.toggleProperty('showAgentComponent');
    },

    createAgent: function() {
      var controller = this;
      var agent = this.store.createRecord('agent', {
        name :this.get('agentname'),
        contactname :this.get('agentcontactname'),
        contactno :this.get('agentcontactno'),
        othcontactno :this.get('agentothcontactno'),
        othrefdetails:this.get('agentothrefdetails'),
      });
      agent.save().then(function(){
        controller.set('agentname','');
        controller.set('agentcontactname','');
        controller.set('agentcontactno','');
        controller.set('agentothcontactno','');
        controller.set('agentothrefdetails','');
        controller.send('onSelectAgent',agent);
        controller.set('showAgentComponent' ,false);
        controller.notifications.addNotification({
          message: 'Agent Created successfully!' ,
          type: 'success',
          autoClear: true
        });
      });
    },


    editAgent :function(){
      var controller  = this;
      // TODO:90 : Data is saving even when the name field is empty.. (Should be fixed at the agent-form too.)
      this.toggleProperty('enableEditAgent');
      let projectagent = this.get('project.agent');
      projectagent.then(function(projectagent){
          if(projectagent.get('hasDirtyAttributes')){
        projectagent.save().then(function(){
          controller.notifications.addNotification({
            message: 'Agent Updated successfully!' ,
            type: 'success',
            autoClear: true
          });
        });
      }

      });
    },


    saveProject :function(){
      var controller = this;
      let project = this.get('project');
      project.save().then(function(){
        controller.notifications.addNotification({
          message: 'Project Updated successfully!' ,
          type: 'success',
          autoClear: true
        });
      });
    }


  }

});
