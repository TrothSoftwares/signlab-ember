import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{

session: Ember.inject.service('session'),

  actions: {
    logout() {
      console.log(this.get('session.data.authenticated.email'));
      this.get('session').invalidate();
      this.transitionTo('login');
    }
  }
});
