import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    createProject: function(){
           var controller = this;
           var customer = this.store.peekRecord('customer',1);
           var agent = this.store.peekRecord('agent', 1);

      var project = this.store.createRecord('project', {
       name: this.get('name'),
       customer : customer,
       agent : agent});

      project.save().then(function(){
        controller.set('name' , '');
        controller.transitionToRoute('projects.project',project);
      });
    }
    // FIXME: CANNOT CREATE PROJECT
  }


});
