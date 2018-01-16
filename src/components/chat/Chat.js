import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createMessage } from '../../actions';

import UserListItem from './UserListItem';
import ChatInput from './ChatInput';
import Message from './Message';

class Chat extends Component {
  componentWillUpdate() {
    var node = this.messagesWindow;
    this.shouldScrollBottom =
      node.scrollTop + node.offsetHeight !== node.scrollHeight;
  }

  componentDidUpdate() {
    if (this.shouldScrollBottom) {
      var node = this.messagesWindow;
      node.scrollTop = node.scrollHeight;
    }
  }

  render() {
    return (
      <div className="Chat">
        <div className="ui segments">
          <div className="ui segment chat-box">
            <div className="ui internally celled grid">
              <div className="four wide column">
                <h4>Players</h4>
                <div className="ui divided list">
                  {this.props.players.map(p => {
                    return <UserListItem key={p.id} player={p} />;
                  })}
                </div>
              </div>
              <div className="twelve wide column">
                <div
                  ref={node => {
                    this.messagesWindow = node;
                  }}
                  className="ui segment messages-window"
                >
                  {this.props.messages.map(msg => (
                    <Message key={msg.id} message={msg} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="ui secondary segment">
            <ChatInput
              gameId={this.props.gameId}
              createMessage={this.props.createMessage}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.game.players,
    messages: state.game.messages,
    gameId: state.game.id
  };
};

export default connect(mapStateToProps, { createMessage })(Chat);
