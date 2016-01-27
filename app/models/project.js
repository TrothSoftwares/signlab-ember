import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  customer: DS.belongsTo('customer' , {async:true}),
  agent: DS.belongsTo('agent' , {async:true}),
  enquiry: DS.belongsTo('enquiry' ,{async:true}),
  items: DS.hasMany('item' ,{embedded: 'always', async:true}),
  quotation: DS.belongsTo('quotation' ,{async:true}),
  status :DS.attr('string'),
  duedate: DS.attr('date')
});
