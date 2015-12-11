import Ember from 'ember';

export default Ember.Controller.extend({


showLongMessage: false,


  actions: {
    showLongMessagecall: function() {

        this.toggleProperty('showLongMessage');
      },

      createCustomer: function(params) {
      //        var controller = this.get('controller');

      console.log('77777777777')

        var self = this;
        var project = this.store.peekRecord('project', 1);
        var customer = this.store.createRecord('customer', {
          name: params.name,
          contactname: params.contactname,
          contactno: params.contactno,
          othcontactno: params.othcontactno,
          othrefdetails: params.othrefdetails,
          // FIXME: fix project_id relationship ; 500 error comming in rails after save
        });
        console.log('8888888888888888888')
        customer.save().then(function(){

          //controller.toggleProperty('showLongMessage');

          //self.get('customers').pushObject(customer);


          self.send('onSelectCustomer',customer);

          self.set('showLongMessage' ,false);

          self.notifications.addNotification({
            message: 'Customer Create successfully!' ,
            type: 'success',
            autoClear: true
          });


        });
      },


    onToggle:function(){
      //var model = this.get('model');
      if(this.model.get('hasDirtyAttributes')){
        this.model.save();
      }
    },
    deleteData:function(){
      var controller = this;
      this.model.deleteRecord();
      this.model.save();
      controller.transitionToRoute('customers.new');
    },
    onSelectCustomer(customer) {
      this.set('customer', customer);

    },

    onSelectAgent(agent) {
      this.set('agent', agent);
    },


  },

});
