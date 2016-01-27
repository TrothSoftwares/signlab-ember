import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: {
    searchTerm: 's',
  },
  searchTerm: '',
  searchStartedTerm: '',

  matchingProjects: Ember.computed( 'model.@each.status', 'model.@each.name','searchTerm', function() {
    var searchTerm = this.get('searchTerm').toLowerCase();
    return this.get('projects').filter(function(project) {
      return (project.get('status') === 'added') && project.get('name').toLowerCase().indexOf(searchTerm) !== -1;
    });
  }),


  matchingStartedProjects: Ember.computed('model.@each.status', 'model.@each.name','searchStartedTerm', function() {
    var searchStartedTerm = this.get('searchStartedTerm').toLowerCase();
    return this.get('projects').filter(function(project) {
      let status =  project.get('status');
      return (status === 'started'  || status === 'finished'  || status === 'delayed') && project.get('name').toLowerCase().indexOf(searchStartedTerm) !== -1;
    });
  }),



      });
