import Ember from 'ember';

export default Ember.Controller.extend({





actions: {
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
  }
},

});
