import DS from 'ember-data';
import {
  validator, buildValidations
}
from 'ember-cp-validations';

var Validations = buildValidations({
  name: validator('presence', true)
});

export default DS.Model.extend(Validations,{

name: DS.attr('string'),
contactname: DS.attr('string'),
contactno: DS.attr('string'),
othcontactno: DS.attr('string'),
othrefdetails: DS.attr('string'),
projects: DS.hasMany('project'),

});
