import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: 'This is First Message', subTxt: 'Submit' };
  }

  componentWillMount() {
    console.log('componentWillMount()');
  }

  componentDidMount() {
    console.log('componentDidMount()');
  }

  swithState() {
    this.setState({ message: 'Thank you 12345', subTxt: 'ThankYou' });
  }

  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <p>{this.state.message}</p>
        <a onClick={this.changeState.bind(this)} href="#">
          CLick Here
        </a>
      </div>
    );
  }
}
