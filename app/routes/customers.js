import Ember from 'ember';

export default Ember.Route.extend({



  model: function(){
return this.store.findAll('customer');
  },

  actions: {


    // didTransition: function(model, transition) {
    //   console.log(this.routename);
    //   this.controller.set('testname' , 'teeeeee')
    //   if(this.routeName == 'customers')
    //   {
    //     this.controller.set('customersRoute' , true)
    //   }
    // }


  }












});
