import DS from 'ember-data';

export default DS.Model.extend({
  dimensions: DS.attr('string'),
  description: DS.attr('string'),
  itemtype: DS.belongsTo('itemtype' , {async:true}),
  jobtypes: DS.hasMany('jobtype' ,{embedded: 'always', async:true}),
  project: DS.belongsTo('project' ,{ async:true})



});
