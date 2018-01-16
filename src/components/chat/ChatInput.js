import React, { Component } from 'react';

class ChatInput extends Component {
  state = { message: '' };

  handleChange = e => {
    const message = e.target.value;
    this.setState({ message });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.createMessage({
      text: this.state.message,
      gameId: this.props.gameId
    });

    this.setState({ message: '' });
  };

  render() {
    return (
      <form className="ui large form" onSubmit={this.handleSubmit}>
        <div className="ui fields">
          <div className="fourteen wide field">
            <input
              value={this.state.message}
              onChange={this.handleChange}
              type="text"
              placeholder="Say Something..."
            />
          </div>

          <div className="four wide field">
            <button type="submit" className="ui fluid violet icon button">
              <i className="large comment outline icon" />
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ChatInput;
