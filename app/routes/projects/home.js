import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    // FIXME: This is added for just adding project with first customer and agent , This should be removed.
    this.store.findAll('customer');
    this.store.findAll('agent');
    return this.store.findAll('project');
},

actions: {
  createProject: function(){

        var route = this;
         var controller = this.get('controller');




var customer = this.store.peekRecord('customer',1);
 var agent = this.store.peekRecord('agent', 1);
    var project = this.store.createRecord('project', {
     name: controller.get('name'),
     customer : customer,
     agent : agent});

    project.save().then(function(){
      controller.set('name' , '');
      route.transitionTo('projects.project',project);
    });
  }

  // FIXME: CANNOT CREATE PROJECT
}


});
