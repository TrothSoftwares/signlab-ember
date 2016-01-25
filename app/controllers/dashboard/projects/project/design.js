import Ember from 'ember';
import EmberUploader from 'ember-uploader';
import ENV from '../../../../config/environment';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  imageUploading: false,

  actions: {

    saveDesigndetails :function(){
      var controller  = this;
      let items = this.get('project').get('items');

      items.forEach(function(item){
        item.save().catch(function(){
          controller.notifications.addNotification({
            message: 'Sorry, cant save at the moment !' ,
            type: 'error',
            autoClear: true
          });
        });
      }).then(function(){
        controller.notifications.addNotification({
          message: 'Design Details Saved!' ,
          type: 'success',
          autoClear: true
        });
      });
    },


    uploadDesignimage :function(params){
      var controller = this;
      let files = params.files,
      item = params.item;
      var newDesignImage = this.store.createRecord('designimage',{description: '',item :item});


      newDesignImage.save().then(function(newDesignImage){
        var uploader = EmberUploader.Uploader.create({
          url: ENV.APP.host + '/designimages/' + newDesignImage.id,
          type: 'PATCH',
          paramNamespace: 'designimage',
          paramName: 'url',
        });
        if (!Ember.isEmpty(files)) {
          uploader.upload(files[0]).then(function(){
            newDesignImage.reload();
          }
        );
      }

    }).catch(function(){
      controller.notifications.addNotification({
        message: 'Sorry, cant save at the moment !' ,
        type: 'error',
        autoClear: true
      });
    });
  },


  uploadDesignimage :function(params){
    var controller = this;


    var authenticated = controller.get('session.data.authenticated');
    let files = params.files,
    item = params.item;

    var newDesignImage = this.store.createRecord('designimage',{description: '',item :item});


    newDesignImage.save().then(function(newDesignImage){
      var uploader = EmberUploader.Uploader.extend({
        url: ENV.APP.host + '/designimages/'+newDesignImage.id,
        type: 'PATCH',
        paramNamespace: 'designimage',
        paramName: 'url',
        ajaxSettings: function() {
          var settings = this._super.apply(this, arguments);
          settings.headers = {
            'Authorization':'Token token="'+ authenticated.token +'", email="'+ authenticated.email +'"'
          };
          return settings;
        }
      }).create();


      uploader.on('progress', function() {
        controller.set('imageUploading',true);
      });

      uploader.on('didUpload', function() {
        controller.notifications.addNotification({
          message:  'File uploaded' ,
          type: 'success',
          autoClear: true
        });
        controller.set('imageUploading',false);
      });

      uploader.on('didError', function(jqXHR, textStatus, errorThrown) {
        controller.notifications.addNotification({
          message: 'Sorry something went wrong' ,
          type: 'success',
          autoClear: true
        });
        console.log(jqXHR + textStatus + errorThrown);
        controller.set('imageUploading',false);
      });


      if (!Ember.isEmpty(files)) {
        uploader.upload(files[0]).then(function(){
          newDesignImage.reload();
        }
      );
    }

  }).catch(function(){
    controller.notifications.addNotification({
      message: 'Sorry, cant save at the moment !' ,
      type: 'error',
      autoClear: true
    });
  });
},


  deleteDesignimage :function(callback , designimage){
    var controller = this;

    designimage.destroyRecord().then(function () {
    }).catch(function () {
      designimage.rollbackAttributes();
      controller.notifications.addNotification({
        message: 'Image cannot be deleted at this moment' ,
        type: 'error',
        autoClear: true
      });
    });
  },
}
});
