
import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  customer: DS.belongsTo('customer' , {async:true}),
  agent: DS.belongsTo('agent' , {async:true}),
  enquiry: DS.belongsTo('enquiry' ,{async:true}),
  items: DS.hasMany('item' ,{embedded: 'always', async:true}),
  quotation: DS.belongsTo('quotation' ,{async:true}),
  status :DS.attr('string'),
  duedate: DS.attr('date'),
  versions:DS.attr(),














//   nameChangesq: Ember.computed('name', function() {
//     console.log(JSON.stringify(this.get('versions')));
//     var versions = this.get('versions');
//     return this.get('versions');
//   }),
//
//
//
//   nameChanges: Ember.computed( 'versions.@each.changeset', function() {
//
//      this.get('versions.@each.changeset').filter(function(changeset) {
//
//
//       return ( changeset.get('name').toLowerCase().indexOf(searchTerm) !== -1;
//     });
//   }),
 });
