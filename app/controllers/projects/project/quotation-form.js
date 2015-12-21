import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    saveQuotation :function(){
        var controller  = this;

        var  quotations = this.get('project').get('quotation');
         quotations.then(function(quotation){
           quotation.save();
         });
        let items = this.get('project').get('items');
        items.forEach(function(item){
          item.save()
        }).then(function(){
          controller.notifications.addNotification({
            message: 'Quotation Saved!' ,
            type: 'success',
            autoClear: true
          });
        });




    }
  }

});
