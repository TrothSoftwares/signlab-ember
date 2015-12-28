import DS from 'ember-data';

export default DS.Model.extend({
  description: DS.attr('string'),
  url: DS.attr('string'),
  fullurl: DS.attr('string'),
  thumburl: DS.attr('string'),
  item: DS.belongsTo('item' , {async:true })
});
