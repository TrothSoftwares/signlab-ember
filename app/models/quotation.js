import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr('date'),
  subject: DS.attr('string'),
  body: DS.attr('string'),
  project: DS.belongsTo('project' ,{ async:true}),
  versions:DS.attr(),
  payment: DS.attr('string'),
  delivery: DS.attr('string'),
  power: DS.attr('string'),
  storetext: DS.attr('string'),
  note: DS.attr('string')
});
