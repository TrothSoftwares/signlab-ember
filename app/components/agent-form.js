import Ember from 'ember';

export default Ember.Component.extend({

  

  actions: {

    editAgent :function(){
      this.toggleProperty('enableEditAgent');
      if(this.get('type') === 'ind'){
        // FIXME : Data is saving even when the name field is empty.. (Should be fixed at the agent-form too.)
        if(this.get('agent.name') !== ''){
          this.get('on-create')({
            name :this.get('agent.name'),
            contactname :this.get('agent.contactname'),
            contactno :this.get('agent.contactno'),
            othcontactno :this.get('agent.othcontactno'),
            othrefdetails:this.get('agent.othrefdetails'),
          });
          this.set('agent.name','');
          this.set('agent.contactname','');
          this.set('agent.contactno','');
          this.set('agent.othcontactno','');
          this.set('agent.othrefdetails','');
        }
      }
      else{
        this.get('on-toggle')({});
      }
    },
    deleteData: function(){
      this.get('on-delete')({});
    }

  },

  // This property is computed based on the type is individual or relationship one
  enableEditAgent: Ember.computed( function() {
    if(this.get('type') === 'ind'){
      return true;
    }else {
      return false;
    }
  })

});
