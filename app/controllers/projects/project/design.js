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
// FIXME: description IS STATIC
      let files = params.files,
          item = params.item;
      var newDesignImage = this.store.createRecord('designimage',{description: '',item :item});
      newDesignImage.save().then(function(newDesignImage){
              var uploader = EmberUploader.Uploader.create({
                // FIXME:  this url should be dymanic
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
      });
    },
    deleteDesignimage :function(designimage){
      designimage.deleteRecord();
      designimage.save();
    }
  }
});
