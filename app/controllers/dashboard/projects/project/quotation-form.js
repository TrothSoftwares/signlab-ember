import Ember from 'ember';

export default Ember.Controller.extend({


  



  actions: {
    saveQuotation :function(){
      var controller  = this;

      var  quotations = this.get('project').get('quotation');
      quotations.then(function(quotation){
        quotation.save().catch(function(){
          controller.notifications.addNotification({
            message: 'Sorry, cant save at the moment !' ,
            type: 'error',
            autoClear: true
          });
        });
      });
      let items = this.get('project').get('items');
      items.forEach(function(item){
        item.save().catch(function(){
          controller.notifications.addNotification({
            message: 'Sorry, cant save at the moment !' ,
            type: 'error',
            autoClear: true
          });
        });
      }).then(function(){
        controller.notifications.addNotification({
          message: 'Quotation Saved!' ,
          type: 'success',
          autoClear: true
        });
      });
    },
    printQuotation :function(){
      window.print();
    }
  }

});
