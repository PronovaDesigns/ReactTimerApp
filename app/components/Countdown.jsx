var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({
  // This component will handle state, it is a main parent container component

  getInitialState: function () {
    return {count: 0};
  },

  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds
    });
  },

  render: function () {
    var {count} = this.state;

    return (
      <div>
        <Clock totalSeconds={count} />;
        <CountdownForm onSetCountdown={this.handleSetCountdown} />
      </div>
    );
  }
});

module.exports = Countdown;
