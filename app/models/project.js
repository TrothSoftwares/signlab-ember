import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  customer: DS.belongsTo('customer' , {async:true}),
  agent: DS.belongsTo('agent' , {async:true})
  // location: DS.attr('string')


});
