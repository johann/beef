import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import withAuth from './hocs/withAuth';
import { logoutUser, fetchCurrentGames, createGame } from '../actions';

class Lobby extends Component {
  componentDidMount() {
    this.props.fetchCurrentGames();
  }

  render() {
    const { logoutUser, createGame } = this.props;
    return (
      <div>
        <button onClick={createGame} className="ui basic green button">
          Create a New Game
        </button>
        <h1>All Current Games</h1>
        <ul>
          {this.props.games.map(game => (
            <li key={game.id}>
              <Link to={`/games/${game.id}`}>{game.id}</Link>
            </li>
          ))}
        </ul>
        <button onClick={logoutUser} className="ui basic red button">
          Logout
        </button>
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
  connect(mapStateToProps, { logoutUser, fetchCurrentGames, createGame })(Lobby)
);
