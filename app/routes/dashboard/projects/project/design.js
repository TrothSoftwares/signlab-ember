import Ember from 'ember';

const get = Ember.get;
const set = Ember.set;

export default Ember.Route.extend({

model: function() {

    return Ember.RSVP.hash({  // RSVP.hash for resolving multiple models, The setupController will only work until all promises resolved.
        project: this.modelFor('dashboard.projects.project'),
    });
      },


        setupController(controller, models) {
          controller.setProperties(models); // For setting all models to access in seperate variable names
        },

        actions: {
   uploadImage: function (file) {
     var product = this.modelFor('product');
     var image = this.store.createRecord('image', {
       product: product,
       filename: get(file, 'name'),
       filesize: get(file, 'size')
     });

     file.read().then(function (url) {
       if (get(image, 'url') == null) {
         set(image, 'url', url);
       }
     });

     file.upload('/api/images/upload').then(function (response) {
       set(image, 'url', response.headers.Location);
       return image.save();
     }, function () {
       image.rollback();
     });
   }
 }


});
