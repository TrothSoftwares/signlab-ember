import Ember from 'ember';
import EmberUploader from 'ember-uploader';
import ENV from '../../../config/environment';

export default Ember.Controller.extend({

  actions: {

    saveJobdetails :function(){
        var controller  = this;
        let items = this.get('project').get('items');
        items.forEach(function(item){
          item.save();
        }).then(function(){
          controller.notifications.addNotification({
            message: 'Job Details Saved!' ,
            type: 'success',
            autoClear: true
          });
        });
    },
    uploadSiteimage :function(params){
      var self = this;
      let files = params.files,
          item = params.item;
      var newSiteImage = this.store.createRecord('siteimage',{description: '',item :item});
      self.send('loading');
      newSiteImage.save().then(function(newSiteImage){
              var uploader = EmberUploader.Uploader.create({
                // FIXME:  this url should be dymanic

                url: ENV.APP.host + '/siteimages/'+newSiteImage.id,
                type: 'PATCH',
                paramNamespace: 'siteimage',
                paramName: 'url',
              });
              if (!Ember.isEmpty(files)) {
                uploader.upload(files[0]).then(function(){
                   newSiteImage.reload();
                }
                );
              }
              self.send('finished');
      });
    },
    deleteSiteimage :function(siteimage){
      siteimage.deleteRecord();
      siteimage.save();
    }


  },


});
