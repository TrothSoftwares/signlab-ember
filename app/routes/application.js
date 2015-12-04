import Ember from 'ember';



var Project = Ember.Object.extend({
name: '',
place: '',

});
var LuluMall = Project.create({
name: 'Lulu Mall',
place: 'Cochin'
});
var ObreonMall = Project.create({
name: 'Obreon Mall',
place: 'Edappally'

});
var AbadPlaza = Project.create({
name: 'Abad Plaza',
place: 'Edappally',

});
var ProjectCollection = Ember.Object.extend({
content: [],
sortProperties: ['name:desc'],
sortedContent: Ember.computed.sort('content', 'sortProperties'),
});
var projects = ProjectCollection.create();
projects.get('content').pushObject(LuluMall);
projects.get('content').pushObject(ObreonMall);
projects.get('content').pushObject(AbadPlaza);


export default Ember.Route.extend({

  model: function() {
return projects;
}

});
