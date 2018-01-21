import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      error: false,
      messages: [],
      fields: {
        username: '',
        password: ''
      }
    };
  }

  handleChange = e => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { fields: { username, password } } = this.state;
    this.props.loginUser(username, password, this.props.history).then(res => {
      if (res.error) {
        this.setState({ error: true, messages: [res.error] });
      }
    });
  };

  renderWarning() {
    return (
      <div className="ui warning message">
        <div className="header">Try Again</div>
        <ul className="list">
          {this.state.messages.map((msg, i) => {
            return <li key={i}>{msg}</li>;
          })}
        </ul>
      </div>
    );
  }

  render() {
    const { fields } = this.state;
    return (
      <div>
        <h1>Login</h1>
        {this.state.error ? this.renderWarning() : null}
        <div className="ui form">
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
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={fields.password}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="ui basic green button">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { loginUser })(Login));
