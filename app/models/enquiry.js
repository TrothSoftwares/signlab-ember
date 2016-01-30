import DS from 'ember-data';

export default DS.Model.extend({
 date: DS.attr('date'),
 no: DS.attr('number'),
 project: DS.belongsTo('project', {async:true}),
 versions:DS.attr()

});
