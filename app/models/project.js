import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  customer: DS.belongsTo('customer' , {async:true}),
  agent: DS.belongsTo('agent' , {async:true}),
  enquiries: DS.hasMany('enquiry' ,{embedded: 'always', async:true}),
  items: DS.hasMany('item' ,{embedded: 'always', async:true}),
  quotation: DS.belongsTo('quotation' ,{async:true})
});
