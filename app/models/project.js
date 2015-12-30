import Ember from 'ember';
import DS from 'ember-data';
import {validator, buildValidations}from 'ember-cp-validations';


var Validations = buildValidations({
  name: validator('presence', true),
});


export default DS.Model.extend(Validations,{
  name: DS.attr('string'),
  customer: DS.belongsTo('customer' , {async:true}),
  agent: DS.belongsTo('agent' , {async:true}),
  enquiries: DS.hasMany('enquiry' ,{embedded: 'always', async:true}),
  items: DS.hasMany('item' ,{embedded: 'always', async:true}),
  quotation: DS.belongsTo('quotation' ,{async:true})
});
