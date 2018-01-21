import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signupUser } from '../../actions';

import capitalize from '../../services/capitalize';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      messages: [],
      passwordMatch: true,
      fields: {
        username: '',
        signupPassword: '',
        passwordConfirmation: ''
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({
      fields: newFields,
      passwordMatch: newFields.signupPassword === newFields.passwordConfirmation
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fields } = this.state;
    this.props
      .signupUser(
        {
          username: fields.username,
          password: fields.signupPassword,
          password_confirmation: fields.passwordConfirmation
        },
        this.props.history
      )
      .then(res => {
        if (res.error) {
          this.setState({ error: true, messages: [res.user_errors] });
        }
      });
  };

  renderWarning() {
    const formatWarning = msg => {
      const key = Object.keys(msg)[0];
      return `${capitalize(key)} ${msg[key]}`;
    };

    return (
      <div className="ui warning message">
        <div className="header">Try Again</div>
        <ul className="list">
          {this.state.messages.map((msg, i) => {
            return <li key={i}>{formatWarning(msg)}</li>;
          })}
        </ul>
      </div>
    );
  }

  render() {
    const { fields, passwordMatch } = this.state;
    return (
      <div>
        <h1>Sign Up</h1>
        {this.state.error ? this.renderWarning() : null}
        <div className="ui form error">
          <form onSubmit={this.handleSubmit}>
            <div className="ui field">
              <label>Username</label>
              <input
                name="username"
                placeholder="Username"
                value={fields.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              {passwordMatch ? null : (
                <div className="ui error message">
                  <p>Your passwords do not match</p>
                </div>
              )}
              <label>Password</label>
              <input
                name="signupPassword"
                type="password"
                placeholder="Password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="ui field">
              <label>Confirm Password</label>
              <input
                name="passwordConfirmation"
                type="password"
                placeholder="Re-enter Password"
                value={fields.passwordConfirmation}
                onChange={this.handleChange}
              />
            </div>
            <button
              disabled={!passwordMatch}
              type="submit"
              className="ui basic green button"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { signupUser })(Signup));
