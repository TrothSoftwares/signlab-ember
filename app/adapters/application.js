import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3001',

  shouldReloadRecord(store, snapshot) {
    return false;
  },
  plurals: {
      enquiry: 'enquiries'
    }
});


export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3001',
});


// import { ActiveModelSerializer } from 'active-model-adapter';
//
// export default ActiveModelSerializer.extend();
