import Ember from 'ember';

export default Ember.Component.extend({
tagName: 'li',
classNames: ['rating-panel'],

setAction: '',
setAction2: '',

actions: {
  alertRating: function(testratingparam){
 alert(testratingparam);
  },

  alertRatingWithText :function(testratingparam){
    this.sendAction('setAction',{
      alertParam: testratingparam
    });
  },
  alertRatingWithText2 :function(testratingparam){
    this.sendAction('setAction2',{
      alertParam: testratingparam
    });
  },
  alertWithClick :function(testratingparam){
    this.get('on-clickii')({
      alertParam: testratingparam
    });

  }



}
});
