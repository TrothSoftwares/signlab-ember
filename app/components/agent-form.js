import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    editAgent :function(){
      this.toggleProperty('enableEditAgent');
      if(this.get('type') === 'ind'){
        // FIXME : Data is saving even when the name field is empty.. (Should be fixed at the agent-form too.)
        if(this.get('name') !== ''){
          this.get('on-create')({
            name :this.get('name'),
            contactname :this.get('contactname'),
            contactno :this.get('contactno'),
            othcontactno :this.get('othcontactno'),
            othrefdetails:this.get('othrefdetails'),
          });
          this.set('name','');
          this.set('contactname','');
          this.set('contactno','');
          this.set('othcontactno','');
          this.set('othrefdetails','');
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
