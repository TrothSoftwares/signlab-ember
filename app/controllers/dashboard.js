import Ember from 'ember';

export default Ember.Controller.extend({
session: Ember.inject.service('session'),

userEmail: Ember.computed('session', function() {
  return (this.get('session.data.authenticated.email'));
}),


});
