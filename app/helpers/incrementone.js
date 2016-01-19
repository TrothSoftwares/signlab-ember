import Ember from 'ember';

export function incrementone(input) {
  input ++;
  return input;
}

export default Ember.Helper.helper(incrementone);
