import Ember from 'ember';
import LoadingSliderMixin from '../mixins/loading-slider';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend(LoadingSliderMixin , ApplicationRouteMixin, {
  actions: {
    sessionAuthenticationSucceeded: function() {
      console.log('callling dashboard route');
      this.transitionTo('dashboard');
    }
  }

});
