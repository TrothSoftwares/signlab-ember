import DS from 'ember-data';


export default DS.Model.extend({
 name: DS.attr('string'),
 date: DS.attr('date'),
 no: DS.attr(),
 project: DS.belongsTo('project')
});
