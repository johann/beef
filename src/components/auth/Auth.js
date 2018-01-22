import React, { Component } from 'react';

import Login from './Login';
import Signup from './Signup';

class Auth extends Component {
  state = { signup: false };

  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({ signup: !prevState.signup }));
  };

  render() {
    return (
      <div>
        <Login />
        <h4>
          Don't have an account?{' '}
          <a onClick={this.handleClick} href="/">
            Click Here to Sign Up.
          </a>
        </h4>
        {this.state.signup ? <Signup /> : null}
      </div>
    );
  }
}

export default Auth;
