import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Hello extends React.Component {
  render() {
    return <p>Hello, {this.props.name}!</p>;
  }
}

const el=<Hello name="David" />;
ReactDOM.render(
  el,
  document.getElementById('root')
);