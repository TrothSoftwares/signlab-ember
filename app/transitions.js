
import { target } from 'liquid-tether';

export default function() {
  this.transition(
    this.hasClass('customer-info'),
    //this.toValue(true),
    this.use('toRight')

  );

  this.transition(
    this.fromRoute('projects.home'),
    this.toRoute('customers.new'),
    this.use('toRight'),
    this.reverse('toLeft')
  );


  this.transition(
  target('hello-world'),
  this.use('tether', ['to-up', {
    duration: 250,
    easing: 'easeInOutQuint'
  }])
);


}
