var React = require('react');

var CountdownForm = React.createClass({

  onSubmit: function(e) {
    // This function is called when the form submit event occurs. We can call the function passed down as a prop from the parent component.
    // The parent component can pass a function into the child component -- the child can use this function with values it contains.
    // After the child successfully uses a function passed in by the parent as prop, the parent rerender the necessary elements.
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;

    // This regular expression checks that the strSeconds variable starts and ends with 0 - 9.
    if (strSeconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      // parseInt turns (casts) the string into an Int and takes a seconds argument of the type of base (e.g. 10 for decimal; 2 for binary)
      this.props.onSetCountdown(parseInt(strSeconds, 10))
    }
  },

  render: function () {
    return (
      <div>
        <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" ref="seconds" placeholder="Enter time in seconds"/>
          <button className="button expanded">Start</button>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
