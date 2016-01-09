import Ember from 'ember';
import EmberUploader from 'ember-uploader';
import ENV from '../../../config/environment';

export default Ember.Controller.extend({

  actions: {

    saveDesigndetails :function(){
      var controller  = this;
      let items = this.get('project').get('items');
      items.forEach(function(item){
        item.save();
      }).then(function(){
        controller.notifications.addNotification({
          message: 'Design Details Saved!' ,
          type: 'success',
          autoClear: true
        });
      });
    },


    uploadDesignimage :function(params){
      var self = this;
      // TODO:40 description IS STATIC
      let files = params.files,
      item = params.item;
      var newDesignImage = this.store.createRecord('designimage',{description: '',item :item});
      self.send('loading');
      newDesignImage.save().then(function(newDesignImage){
        var uploader = EmberUploader.Uploader.create({
          // TODO:30 this url should be dymanic
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
      self.send('finished');
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
