import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    // FIXME: This is added for just adding project with first customer and agent , This should be removed.
    this.store.findAll('customer');
    this.store.findAll('agent');
    return this.store.findAll('project');
},



});
