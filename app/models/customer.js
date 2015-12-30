import DS from 'ember-data';



export default DS.Model.extend({

name: DS.attr('string'),
contactname: DS.attr('string'),
contactno: DS.attr('string'),
othcontactno: DS.attr('string'),
othrefdetails: DS.attr('string'),
projects: DS.hasMany('project'),

});
