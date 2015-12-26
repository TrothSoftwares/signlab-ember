import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
const { service } = Ember.inject;


export default Ember.Route.extend(AuthenticatedRouteMixin,{

  session: service('session'),
  model: function() {

    // FIXME: This is added for just adding project with first customer and agent , This should be removed.
    this.store.findAll('customer');
    this.store.findAll('agent');
    return this.store.findAll('project');
},

actions: {
    logout() {
      this.get('session').invalidate();
    }
  }



});
