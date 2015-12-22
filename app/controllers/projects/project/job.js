import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {

    saveJobdetails :function(){
        var controller  = this;
        let items = this.get('project').get('items');
        items.forEach(function(item){
          item.save();
        }).then(function(){
          controller.notifications.addNotification({
            message: 'Job Details Saved!' ,
            type: 'success',
            autoClear: true
          });
        });




    }
  }
});
