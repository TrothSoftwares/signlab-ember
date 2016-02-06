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
        agent : agent,
        status :'added'
      });

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
              body :'We are pleased to quote out lowest rate for the sign required as per the detailed discussion with us. We have also taken into consideration, as you are one of our esteemed customer. We are quoting this competitive rate.',
              payment :'60% Advance balance and 40% up on completion',
              delivery : 'With 30 days from the date of confirmation and advance payment',
              power : '220V power supply should be provided near the sign for fixing.',
              storetext :'Store facility of working materials should be provided',
              note :'All legal and official permit should be provided. External network, electrical and civil work should be done from customer side',
              project : project,

            });

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
