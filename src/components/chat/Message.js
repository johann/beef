import React from 'react';
import { connect } from 'react-redux';

const Message = props => {
  const player = props.players.find(p => p.username === props.message.user);
  let color;
  if (player) {
    color = player.role.includes('blue') ? 'blue' : 'red';
  } else {
    color = 'gray';
  }
  return (
    <p className="right aligned">
      <span className={`message-username ${color}`}>{props.message.user}:</span>
      <span className={`message-text`}>{props.message.text}</span>
    </p>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.auth.currentUser,
    players: state.game.players
  };
};

export default connect(mapStateToProps)(Message);
