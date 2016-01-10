import Ember from 'ember';
import EmberUploader from 'ember-uploader';
import ENV from '../../../config/environment';

export default Ember.Controller.extend({

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

      controller.send('loading');
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
      controller.send('finished');
    }).catch(function(){
      controller.notifications.addNotification({
        message: 'Sorry, cant save at the moment !' ,
        type: 'error',
        autoClear: true
      });
    });
  },



  deleteDesignimage :function(designimage){
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
