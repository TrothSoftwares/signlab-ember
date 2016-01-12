import Ember from 'ember';
import EmberUploader from 'ember-uploader';

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

      let files = params.files,
          item = params.item;
      var newSiteImage = this.store.createRecord('siteimage',{description: 'test desc',item :item});
      newSiteImage.save().then(function(newSiteImage){
        console.log('new site image created and saved')
              var uploader = EmberUploader.Uploader.create({
                // FIXME:  this url should be dymanic
                url: 'http://localhost:3000/siteimages/'+newSiteImage.id,
                type: 'PATCH',
                paramNamespace: 'siteimage',
                paramName: 'url',
              });
              if (!Ember.isEmpty(files)) {
                uploader.upload(files[0]).then(function(){
                  console.log('siteimage patching from job.jss')
                   newSiteImage.reload();
                }
                );
              }
      });
    },
    deleteSiteimage :function(siteimage){
      siteimage.deleteRecord();
      siteimage.save();
    }


  },


});
