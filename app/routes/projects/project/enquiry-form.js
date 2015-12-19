import Ember from 'ember';


export default Ember.Route.extend({
  model: function() {

    // return this.store.findAll('customer');
    return Ember.RSVP.hash({
      project: this.modelFor('projects.project'),
      customers: this.store.findAll('customer'),
      agents: this.store.findAll('agent'),
      enquiries: this.store.findAll('enquiry'),
      itemtypes: this.store.findAll('itemtype'),
      jobtypes: this.store.findAll('jobtype'),
      items: this.store.findAll('item')

    });
  },


  setupController(controller, models) {
    controller.set('project', models.project);
    controller.set('customers', models.customers);
    controller.set('agents', models.agents);
    controller.set('enquiries', models.enquiries);
    controller.set('itemtypes', models.itemtypes);
    controller.set('jobtypes', models.jobtypes);
    var enqs = models.project.get('enquiries');
    var count = enqs.get('length');
    var currentEnquiry = enqs.objectAt(count-1);

    // FIXME: currentEnquiry is static here ^^ look above
    controller.set('currentEnquiry',currentEnquiry);
  },




  actions: {



    saveProject:function(){

      var self = this;

      var controller= this.get('controller');
      var  project = controller.get('project');
      var customer = controller.get('project.customer');
      var agent = controller.get('project.agent');
      var currentEnquiry = project.get('enquiries');
      currentEnquiry.forEach(function(curenq){
        curenq.save();
      });
      //var newproject = this.store.createRecord('project' , { name: 'Sasi project', customer: customer , agent:agent});
      //project.set('enquiry',)

      project.set('customer', customer );
      project.set('agent', agent );

      var currentItems = project.get('items');
      currentItems.forEach(function(curitem){
        curitem.save();
      });


      var itemtype = this.store.peekRecord('itemtype', 1);

      // var jobtypes = this.store.peekAll('jobtype');
      // console.log(JSON.stringify(jobtypesq));
      // console.log(jobtypesq);
      // var newitem = this.store.createRecord('item' ,
      // { dimensions: 'test dimensions', description: 'test description' , project:  project , itemtype: itemtype , jobtypes: jobtypes  });
      // console.log('++++++' + newitem.get('jobtypes').resolve());
      // newitem.get('jobtypes').then(function(jobtys){
      //   jobtys.pushObject(jobtypes);
      // });
      //  newitem.get('jobtypes').pushObject(jobtypes);
      // newitem.save();
      // let item = this.store.peekRecord('item', 1);
      // let jobtype = this.store.peekRecord('jobtype', 1);
      // item.get('jobtypes').pushObject(jobtype);
      // item.save();

      return project.save().then(function(){
        self.notifications.addNotification({
          message: 'Project Saved!' ,
          type: 'success',
          autoClear: true
        });

      });


    }
  }




});
