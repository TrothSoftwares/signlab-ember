import Ember from 'ember';

export default Ember.Controller.extend({


  actions: {
    onSelectCustomer(customer) {
      this.set('project.customer', customer);
    },

    openCustomerComponent: function() {
      this.toggleProperty('showCustomerComponent');
    },

    createCustomer: function() {
      var controller = this;
      var customer = this.store.createRecord('customer', {
        name :this.get('custname'),
        contactname :this.get('custcontactname'),
        contactno :this.get('custcontactno'),
        othcontactno :this.get('custothcontactno'),
        othrefdetails:this.get('custothrefdetails'),
      });
      customer.save().then(function(){
        controller.set('custname','');
        controller.set('custcontactname','');
        controller.set('custcontactno','');
        controller.set('custothcontactno','');
        controller.set('custothrefdetails','');
        controller.send('onSelectCustomer',customer);
        controller.set('showCustomerComponent' ,false);
        controller.notifications.addNotification({
          message: 'Customer Created successfully!' ,
          type: 'success',
          autoClear: true
        });
      });
    },


    editCustomer :function(){
      var controller  = this;
      // FIXME : Data is saving even when the name field is empty.. (Should be fixed at the agent-form too.)
      this.toggleProperty('enableEditCustomer');
      let projectCustomer = this.get('project.customer');
      projectCustomer.then(function(projectcustomer){
          if(projectCustomer.get('hasDirtyAttributes')){
        projectcustomer.save().then(function(){
          controller.notifications.addNotification({
            message: 'Customer Updated successfully!' ,
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
