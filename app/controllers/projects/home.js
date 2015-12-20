import Ember from 'ember';

export default Ember.Controller.extend({



  queryParams: {
    searchTerm: 's',
  },
  searchTerm: '',

  matchingProjects: Ember.computed('model.@each.name','searchTerm', function() {
    var searchTerm = this.get('searchTerm').toLowerCase();
    return this.get('model').filter(function(customer) {
      return customer.get('name').toLowerCase().indexOf(searchTerm) !== -1;
    });
  }),



  actions: {
    createProject: function(){
      var controller = this;
      var customer = this.store.peekRecord('customer',1);
      var agent = this.store.peekRecord('agent', 1);

      var project = this.store.createRecord('project', {
        name: this.get('name'),
        customer : customer,
        agent : agent});

        var enquiry = this.store.createRecord('enquiry', {
          date: new Date(),
          no: '',
          project : project});
          project.save().then(function(){
            enquiry.save();
            controller.set('name' , '');
            controller.transitionToRoute('projects.project',project);
          });
        }
        // FIXME: CANNOT CREATE PROJECT
      }


    });
