import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';


export default DS.JSONAPIAdapter.extend(DataAdapterMixin,{
  host: 'http://localhost:3000',
  authorizer: 'authorizer:devise',


  plurals: {
      enquiry: 'enquiries'
    },




});

//
// export default DS.JSONAPIAdapter.extend({
//   host: 'http://localhost:3001',
// });


// import { ActiveModelSerializer } from 'active-model-adapter';
//
// export default ActiveModelSerializer.extend();
