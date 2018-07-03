var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {

      return (
        <div className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">React Timer App</li>
              <li>
                <IndexLink to="/" activeClass="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
              </li>
              <li>
                <Link to="/" activeClass="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
              </li>
            </ul>
          </div>

          <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                Created by <a href="/" target="_blank">Christopher A. Migliorini</a>
              </li>
            </ul>
          </div>
        </div>
      );
};

module.exports = Nav;
