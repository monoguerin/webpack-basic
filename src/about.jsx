/* global document */
var React = require('react');
var ReactDOM = require('react-dom');

require('./style.scss');

class AboutUs extends React.Component {
  render () {
    return (
      <div>About Us</div>
    );
  }
}

ReactDOM.render(<AboutUs />, document.getElementById('react-container'));
