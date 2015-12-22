import Ember from 'ember';

export default Ember.Controller.extend({


  actions: {
    onSelectagent(agent) {
      this.set('project.agent', agent);
    },

    openagentComponent: function() {
      this.toggleProperty('showagentComponent');
    },

    createagent: function() {
      var controller = this;
      var agent = this.store.createRecord('agent', {
        name :this.get('custname'),
        contactname :this.get('custcontactname'),
        contactno :this.get('custcontactno'),
        othcontactno :this.get('custothcontactno'),
        othrefdetails:this.get('custothrefdetails'),
      });
      agent.save().then(function(){
        controller.set('custname','');
        controller.set('custcontactname','');
        controller.set('custcontactno','');
        controller.set('custothcontactno','');
        controller.set('custothrefdetails','');
        controller.send('onSelectagent',agent);
        controller.set('showagentComponent' ,false);
        controller.notifications.addNotification({
          message: 'Agent Created successfully!' ,
          type: 'success',
          autoClear: true
        });
      });
    },


    editagent :function(){
      var controller  = this;
      // FIXME : Data is saving even when the name field is empty.. (Should be fixed at the agent-form too.)
      this.toggleProperty('enableEditagent');
      let projectagent = this.get('project.agent');
      projectagent.then(function(projectagent){
          if(projectagent.get('hasDirtyAttributes')){
        projectagent.save().then(function(){
          controller.notifications.addNotification({
            message: 'agent Updated successfully!' ,
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
