import Ember from 'ember';

export default Ember.Controller.extend({

  statuses: ['started','finished' ,'added','delayed'],

  actions: {
    selectStatus(status) {
      this.get('project').set('status', status);
      this.get('project').save();
    },


    saveProject: function(callback){
        var promise = this.get('project').save();
        callback(promise);
    }
  }
});
