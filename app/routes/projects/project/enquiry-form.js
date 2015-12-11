import Ember from 'ember';


export default Ember.Route.extend({
  model: function() {
 // return this.modelFor('projects.project');
return Ember.RSVP.hash({
     project: this.modelFor('projects.project'),
     customers: this.store.findAll('customer'),
     agents: this.store.findAll('agent'),


   });
},


setupController(controller, models) {
   controller.set('project', models.project);
   controller.set('customers', models.customers);
   controller.set('agents', models.agents);

   // or, more concisely:
   // controller.setProperties(models);
 },

 actions: {
   saveProject:function(){



    var controller= this.get('controller');
      // project = controller.get('project');
       let project = this.store.peekRecord('project', 1);
      // customer = controller.get('customer');
      //project.get('customer').pushObject(customer);
var customer = this.store.peekRecord('customer', 2);
var agent = this.store.peekRecord('agent', 1);
      //var newproject = this.store.createRecord('project' , { name: 'Sasi project', customer: customer , agent:agent});

console.log("--------------------------");
         project.set('customer', customer );
         console.log("--------------------------");
         //project.set('customer',customer);
        // newproject.save();

      return project.save();
      // var  projectmodel = this.modelFor('projects.project');

      // let project = this.store.peekRecord('project', 1);
      // console.log("--------------------------");
      // project.set('customer', customer);
      // project.save().then(function(){
      //   console.log("---------SAVED------------");
      // });

      //  var newproject = this.store.createRecord({project: project });
      //  newproject.save().then(function(){
      //    console.log('---------------------  SAVED --------------------');
      //   });





   }
 }




});
