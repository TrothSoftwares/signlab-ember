import Ember from 'ember';

export default Ember.Controller.extend({

  statuses: ['started','finished' ,'added','delayed'],

  actions: {
    selectStatus(status) {
      this.get('project').set('status', status);
      
    },


    saveProject: function(callback){
        var promise = this.get('project').save();
        callback(promise);
    }
  }
});
