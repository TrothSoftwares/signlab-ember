


import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  url: '',
  filesDidChange: function(files) {



     this.get('on-upload')({
       files: files,
       siteimages: this.get('siteimages'),
       item : this.get('item')

       });



  }
});
