var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  // This component will handle state, it is a main parent container component

  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped'
    };
  },

  componentDidUpdate: function (prevProps, prevState) {
    // This "Component Lifecycle Method" when a components props or state gets updated
    if (this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  },

  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    }, 1000);
  },

  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    });
  },

  render: function () {
    var {count} = this.state;

    return (
      <div>
        <Clock totalSeconds={count} />
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }
});

module.exports = Countdown;
