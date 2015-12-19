import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    editagent :function(){
  // FIXME : Data is saving even when the name field is empty.. (Should be fixed at the agent-form too.)
      this.toggleProperty('enableEditagent');
      if(this.model.get('hasDirtyAttributes')){
        this.model.save();
      }
    },

    deleteData: function(){
      this.model.deleteRecord();
      this.model.save();
      this.transitionToRoute('agents.new');
    }
  }

});
