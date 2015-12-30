


import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  url: '',
  filesDidChange: function(files) {
     this.get('on-upload')({
       files: files,
       siteimages: this.get('siteimages'),
       designimages: this.get('designimages'),
       item : this.get('item')
       });
  }
});
