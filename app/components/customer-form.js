import Ember from 'ember';

export default Ember.Component.extend({



  actions: {

    editCustomer :function(){
// FIXME : Data is saving even when the name field is empty.. (Should be fixed at the agent-form too.)
      //if(this.get('customer.name') !== ''){

      this.toggleProperty('enableEditCustomer');
      if(this.get('type') === 'ind'){
        this.get('on-create')({
          name :this.get('name'),
          contactname :this.get('contactname'),
          contactno :this.get('contactno'),
          othcontactno :this.get('othcontactno'),
          othrefdetails:this.get('othrefdetails'),

        });

        // this.set('customer.name','');
        // this.set('customer.contactname','');
        // this.set('customer.contactno','');
        // this.set('customer.othcontactno','');
        // this.set('customer.othrefdetails','');
        
      }

      else{
        this.get('on-toggle')({});
      }
  //  }

    },

    deleteData: function(){
      this.get('on-delete')({});
    }

  },





  enableEditCustomer: Ember.computed( function() {
    if(this.get('type') === 'ind'){
        return true;
    }else {
      return false;
    }
  })


/*
There are Four situvations we use this Component

  1.Individual Creation  --- Done -- Indicated by 'ind' and 'on-create' action is called.. Then it's redirected to Updation
  2.Individual Updation   -- Done -- by on-toggle
  3.Project Creation    --- Search and assign, / Create New Customer
  4.Project Updation    ---

*/








});
