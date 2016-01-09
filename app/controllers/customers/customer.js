import Ember from 'ember';

export default Ember.Controller.extend({

  isEditCustomerButtonDisabled: Ember.computed('model.name',  function() {
     return Ember.isEmpty(this.get('model.name'));
  }),

actions: {
  editCustomer :function(){
// TODO:100 : Data is saving even when the name field is empty.. (Should be fixed at the agent-form too.)
    this.toggleProperty('enableEditCustomer');
    if(this.model.get('hasDirtyAttributes')){
      this.model.save();
    }
  },
//TODO:10 CATCH ERROR: if not deleted due to relationship Data
//TODO:20 MESSAGE ERROR: That there is a project assigned to this data
  deleteData: function(){
    this.model.deleteRecord();
    this.model.save();
    this.transitionToRoute('customers.new');
  }
}
});
