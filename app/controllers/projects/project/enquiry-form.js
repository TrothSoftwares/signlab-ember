import Ember from 'ember';

export default Ember.Controller.extend({


showCustomerComponent: false,
showAgentComponent: false,

stepOne: true,
stepTwo: false,
stepThree: false,

  actions: {
toStepTwo: function() {
   this.set('stepOne', false);
   this.set('stepTwo', true);
 },

toStepThree: function() {
   this.set('stepTwo', false);
   this.set('stepThree', true);
 },

 toStepOne: function(){
   this.set('stepThree', false);
   this.set('stepOne', true);
 },
    openCustomerComponent: function() {

        this.toggleProperty('showCustomerComponent');
      },
    openAgentComponent: function() {

        this.toggleProperty('showAgentComponent');
      },
      createCustomer: function(params) {

        
      //        var controller = this.get('controller');
      console.log('---------');
      console.log(params.name);
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

        customer.save().then(function(){
          //controller.toggleProperty('showLongMessage');
          //self.get('customers').pushObject(customer);
          self.send('onSelectCustomer',customer);
          self.set('showCustomerComponent' ,false);
          self.notifications.addNotification({
            message: 'Customer Created successfully!' ,
            type: 'success',
            autoClear: true
          });
        });
      },
      createAgent: function(params) {
      //        var controller = this.get('controller');
        var self = this;
        var project = this.store.peekRecord('project', 1);
        var agent = this.store.createRecord('agent', {
          name: params.name,
          contactname: params.contactname,
          contactno: params.contactno,
          othcontactno: params.othcontactno,
          othrefdetails: params.othrefdetails,
          // FIXME: fix project_id relationship ; 500 error comming in rails after save
        });

        agent.save().then(function(){
          self.send('onSelectAgent',agent);
          self.set('showAgentComponent' ,false);
          self.notifications.addNotification({
            message: 'Agent Created successfully!' ,
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
      this.set('project.customer', customer);

    },

    onSelectAgent(agent) {
      this.set('project.agent', agent);
    },

    onSelectItemtypes(index , itemType){
      this.set('project.items').objectAt(index).set('itemtype', itemType);
    },

    onSelectJobtypes(index , jobType  ){
      this.get('project.items').objectAt(index).set('jobtype',jobType);


    }


  },

});
