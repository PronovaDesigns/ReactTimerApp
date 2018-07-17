var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
// Load in jQuery so we can manipulate the DOM and see if components are rendering as expected
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

// It is a good idea to run this simple test to make sure webpack is running testing properly and the module is looding
describe('CountdownForm', () => {
   it('should exist', () => {
     expect(CountdownForm).toExist();
   });

   it('should call onSetCountdown if valid seconds entered', () => {
     var spy = expect.createSpy();
     var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
     // $el is the jQuery selector -- stands for element?
     var $el = $(ReactDOM.findDOMNode(countdownForm));

     countdownForm.refs.seconds.value = '109';
     TestUtils.Simulate.submit($el.find('form')[0]);

     expect(spy).toHaveBeenCalledWith(109);
   });

     it('it should not call onSetCountdown if invalid seconds entered', () => {
       var spy = expect.createSpy();
       var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
       // $el is the jQuery selector
       var $el = $(ReactDOM.findDOMNode(countdownForm));

       countdownForm.refs.seconds.value = 'aqwer';
       TestUtils.Simulate.submit($el.find('form')[0]);

       expect(spy).toNotHaveBeenCalled();
   });
});
