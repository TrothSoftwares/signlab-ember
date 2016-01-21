import Ember from 'ember';

import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  // onSessionIsAuthenticated: function () {
  //   console.log('sssss');
  //    var isAuthenticated = this.get('session').get('isAuthenticated');
  //
  //    if (!isAuthenticated) {
  //      return false;
  //    }
  //
  //    var userController = this.controllerFor('user');
  //
  //    return Ember.RSVP.hash({
  //      user: this.store.find('gsUser').then(function (data) {
  //        userController.set('content', data.get('content')[0]);
  //      })
  //    });
  //  }.observes('session.isAuthenticated').on('init')
  });
