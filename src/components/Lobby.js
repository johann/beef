import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCable } from 'react-actioncable-provider';

import withAuth from './hocs/withAuth';
import GameListing from './GameListing';
import {
  logoutUser,
  fetchCurrentGames,
  createGame,
  addGame,
  playerJoin
} from '../actions';

class Lobby extends Component {
  componentDidMount() {
    this.props.fetchCurrentGames();
  }

  handleSocketResponse = data => {
    switch (data.type) {
      case 'NEW_GAME':
        this.props.addGame(data.payload);
        break;
      case 'PLAYER_JOIN':
        console.log('here');
        this.props.playerJoin(data.payload);
        break;
      default:
        console.log(data);
    }
  };

  render() {
    const { logoutUser, createGame } = this.props;
    return (
      <div>
        <ActionCable
          channel={{ channel: 'LobbyChannel' }}
          onReceived={this.handleSocketResponse}
        />
        <div className="ui buttons">
          <button onClick={createGame} className="ui basic green button">
            Create a New Game
          </button>
          <button onClick={logoutUser} className="ui basic red button">
            Logout
          </button>
        </div>
        <h1>All Current Games</h1>
        <ul>
          {this.props.games.map(game => (
            <GameListing key={game.id} game={game} />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.lobby.games
  };
};

export default withAuth(
  connect(mapStateToProps, {
    logoutUser,
    fetchCurrentGames,
    createGame,
    addGame,
    playerJoin
  })(Lobby)
);
