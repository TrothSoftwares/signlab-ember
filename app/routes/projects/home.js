import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
return this.store.findAll('project');
},
actions: {

  createProject: function(){

    var route = this,
        controller = this.get('controller');

        if(controller.getProperties('name') !== ''){

    var project = this.store.createRecord('project', controller.getProperties('name'));

    project.save().then(function(){
      controller.set('name' , '');
      route.transitionTo('projects.project',project);
    });
  }
  else{
    alert("Project Name is Empty");
  }

},


}
});
