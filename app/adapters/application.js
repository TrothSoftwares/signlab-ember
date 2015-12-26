import DS from 'ember-data';
import ENV from '../config/environment';


export default DS.JSONAPIAdapter.extend({
  // host: 'http://localhost:3000',
  host: ENV.APP.host,

  shouldReloadRecord(store, snapshot) {
    return false;
  },
  plurals: {
      enquiry: 'enquiries'
    }
});

//
// export default DS.JSONAPIAdapter.extend({
//   host: 'http://localhost:3001',
// });


// import { ActiveModelSerializer } from 'active-model-adapter';
//
// export default ActiveModelSerializer.extend();
