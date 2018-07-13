var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Timer = React.createClass ({

  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },

  componentWillUnmount: function () {
    // Fires just right after a component is removed and just before another component's rendering in its place (if there is another)
    clearInterval(this.timer);
    this.timer = undefined;
  },

  componentDidUpdate: function (prevProps, prevState) {
    // This "Component Lifecycle Method" fires just after a components props or state gets updated
    if (this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
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
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    }, 1000);
  },

  handleStatusChange: function (newStatus) {
    this.setState({timerStatus: newStatus});
  },

  render: function () {
    var {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count} />
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange} />
      </div>
    );
  }
});

module.exports = Timer;
