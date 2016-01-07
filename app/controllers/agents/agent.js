import Ember from 'ember';

export default Ember.Controller.extend({


  actions: {
    editAgent :function(){
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
