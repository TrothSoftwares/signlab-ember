import Ember from 'ember';

export default Ember.Controller.extend({
  isCreateProjectButtonDisabled: Ember.computed('name', function() {
    return Ember.isEmpty(this.get('name'));
  }),

  actions: {
    createProject: function(){
      var controller = this;
      var customer = this.get('customers').get('firstObject');
      var agent = this.get('agents').get('firstObject');
      var project = this.store.createRecord('project', {
        name: this.get('name'),
        customer : customer,
        agent : agent});

        project.save().then(function(){
          var enquiry = controller.store.createRecord('enquiry', {
            date: new Date(),
            no: '',
            project : project});
            enquiry.save().catch(function(){
              controller.notifications.addNotification({
                message: 'Sorry, cant save at the moment !' ,
                type: 'error',
                autoClear: true
              });
            });

            var quotation = controller.store.createRecord('quotation', {
              project : project});

              quotation.save().catch(function(){
                controller.notifications.addNotification({
                  message: 'Sorry, cant save at the moment !' ,
                  type: 'error',
                  autoClear: true
                });
              });

              controller.set('name' , '');
              controller.transitionToRoute('dashboard.projects.project.enquiry-form',project);
            });
          }
          // DONE:50 CANNOT CREATE PROJECT
        }


});
