import Ember from 'ember';

export default Ember.Controller.extend({

  isEditCustomerButtonDisabled: Ember.computed('model.name',  function() {
    return Ember.isEmpty(this.get('model.name'));
  }),

  actions: {
    editCustomer :function(){
      var controller = this;
      this.toggleProperty('enableEditCustomer');
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
    //TODO:60 CATCH ERROR: if not deleted due to relationship Data
    //TODO:70 MESSAGE ERROR: That there is a project assigned to this data



    deleteData: function(customer){
      var controller = this;

      customer.destroyRecord().then(function () {
        controller.notifications.addNotification({
          message: 'Customer Deleted!' ,
          type: 'success',
          autoClear: true
        });
      }).catch(function () {
        customer.rollbackAttributes();
        controller.notifications.addNotification({
          message: 'Customer cannot be deleted. This customer may be assigned to some project!' ,
          type: 'error',
          autoClear: true
        });
      });
    }

  }
});
