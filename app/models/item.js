import DS from 'ember-data';

export default DS.Model.extend({
  dimensions: DS.attr('string'),
  description: DS.attr('string'),
  unit: DS.attr('string'),
  rate: DS.attr('string'),
  amount: DS.attr('string'),
  surveydetails: DS.attr('string'),
  technique: DS.attr('string'),
  material: DS.attr('string'),
  team: DS.attr('string'),
  designspecifications: DS.attr('string'),
  designnotes: DS.attr('string'),
  itemtype: DS.belongsTo('itemtype' , {async:true }),
  jobtype: DS.belongsTo('jobtype' ,{ async:true } ),
  project: DS.belongsTo('project' ,{ async:true})




});
