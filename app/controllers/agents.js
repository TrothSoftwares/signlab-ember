import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: {
    searchTerm: 's',
  },
searchTerm: '',

  matchingAgents: Ember.computed('model.@each.name','searchTerm', function() {
    var searchTerm = this.get('searchTerm').toLowerCase();
    return this.get('model').filter(function(customer) {
      return customer.get('name').toLowerCase().indexOf(searchTerm) !== -1;
    });
  }),


});
