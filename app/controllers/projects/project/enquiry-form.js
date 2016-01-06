import Ember from 'ember';

export default Ember.Controller.extend({


  showCustomerComponent: false,
  showAgentComponent: false,
  isSaveProjectButtonDisabled: Ember.computed('project.name', function() {
    return Ember.isEmpty(this.get('project.name'));
  }),

  isCreateCustomerButtonDisabled: Ember.computed('custname',  function() {
     return Ember.isEmpty(this.get('custname'));
  }),

  isCreateAgentButtonDisabled: Ember.computed('agentname',  function() {
     return Ember.isEmpty(this.get('agentname'));
  }),






  actions: {

    AddNewItem: function(){


      let itemtype = this.get('itemtypes').get('firstObject');
      let jobtype = this.get('jobtypes').get('firstObject');
      let project = this.get('project');
      var newitem = this.store.createRecord('item', {
        dimensions: '',
        description: '',
        itemtype: itemtype ,
        jobtype: jobtype,
        project: project });
        newitem.save();
        this.get('project.items').pushObject(newitem);
      },

      deleteItem: function(item){
        item.deleteRecord();
        item.save();
      },

      openCustomerComponent: function() {

        this.toggleProperty('showCustomerComponent');
      },
      openAgentComponent: function() {

        this.toggleProperty('showAgentComponent');
      },



      onSelectCustomer(customer) {
        this.set('project.customer', customer);
      },

      onSelectAgent(agent) {
        this.set('project.agent', agent);
      },

      onSelectItemtypes(index , itemType){
        this.get('project.items').objectAt(index).set('itemtype', itemType);
      },

      onSelectJobtypes(index , jobType  ){
        this.get('project.items').objectAt(index).set('jobtype',jobType);
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


      createAgent: function() {
        var controller = this;
        var agent = this.store.createRecord('agent', {
          name :this.get('agentname'),
          contactname :this.get('agentcontactname'),
          contactno :this.get('agentcontactno'),
          othcontactno :this.get('agentothcontactno'),
          othrefdetails:this.get('agentothrefdetails'),
        });

        agent.save().then(function(){
          controller.set('agentname','');
          controller.set('agentcontactname','');
          controller.set('agentcontactno','');
          controller.set('agentothcontactno','');
          controller.set('agentothrefdetails','');
          controller.send('onSelectAgent',agent);
          controller.set('showAgentComponent' ,false);
          controller.notifications.addNotification({
            message: 'agent Created successfully!' ,
            type: 'success',
            autoClear: true
          });
        });
      },


      saveProject:function(){



        var controller= this;
        var  project = controller.get('project');
        var customer = controller.get('project.customer');
        var agent = controller.get('project.agent');
        var currentEnquiry = project.get('enquiries');
        currentEnquiry.forEach(function(curenq){
          curenq.save();
        });


        project.set('customer', customer );
        project.set('agent', agent );

        var currentItems = project.get('items');
        currentItems.forEach(function(curitem){
          curitem.save();
        });


        return project.save().then(function(){
          controller.notifications.addNotification({
            message: 'Project Saved!' ,
            type: 'success',
            autoClear: true
          });
        });


      }

    },

  });
