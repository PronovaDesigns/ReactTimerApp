var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  // This component will handle state, it is a main parent container component

  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },

  // componentWillMount: function () {
  //   // Fires just before component is rendered -- no access to refs or DOM
  //   console.log("Component will mount!")
  // },
  //
  // componentDidMount: function () {
  //   // Fires right after everything gets rendered in the DOM -- access to refs and DOM
  //   console.log("Component did mount!")
  // },

  componentWillUnmount: function () {
    // Fires just right after a component is removed and just before another component's rendering in its place (if there is another)
    clearInterval(this.timer);
    this.timer = undefined;
  },

  // componentWillUpdate: function (nextProps, nextState) {
  //   // This fires just before a components props or state gets updated
  //
  // },

  componentDidUpdate: function (prevProps, prevState) {
    // This "Component Lifecycle Method" fires just after a components props or state gets updated
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer)
          // Stops the interval timer from counting down
          this.timer = undefined;
          break;
      }
    }
  },

  startTimer: function () {
    this.timer = setInterval( () => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });

      if (newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },

  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },

  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus});
  },

  render: function () {
    var {count, countdownStatus} = this.state;

    var renderControlArea = () => {
      if (countdownStatus != 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange} />
      } else {
        return <CountdownForm onSetCountdown={this.handleSetCountdown} />
      }
    };

    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count} />
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
