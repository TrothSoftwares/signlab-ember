import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: {
    searchTerm: 's',
  },
  searchTerm: '',

  matchingProjects: Ember.computed('model.@each.name','searchTerm', function() {
    var searchTerm = this.get('searchTerm').toLowerCase();
    return this.get('projects').filter(function(customer) {
      return customer.get('name').toLowerCase().indexOf(searchTerm) !== -1;
    });
  }),



      });
