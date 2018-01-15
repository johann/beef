import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createGamePlayer } from '../../actions';

class TeamSelection extends Component {
  spyMaster(team) {
    return this.props.players.find(p => p.role === `${team}_spy_master`);
  }

  listPlayers(team) {
    const players = this.props.players.filter(p => p.role === team);
    return players.length ? (
      <ul>{players.map(p => <li key={p.id}>{p.username}</li>)}</ul>
    ) : (
      <p>There are 0 players on this team</p>
    );
  }

  renderTeam(team) {
    const spyMaster = this.spyMaster(team);
    return (
      <div className="ui segments">
        <div className={`ui inverted ${team} segment`}>
          <h1>{`${capitalize(team)} Team`}</h1>
        </div>
        <div className="ui secondary segment">
          <h3>{`${capitalize(team)} Spy Master`}</h3>
          {spyMaster ? (
            <p>{`The ${capitalize(
              team
            )} Spy Master is ${spyMaster.username}`}</p>
          ) : (
            <div>
              <p>{`The ${capitalize(
                team
              )} Team does not currently have a Spy Master`}</p>
              <div
                onClick={() => this.handleJoin(`${team}_spy_master`)}
                className={`ui violet basic button`}
              >
                Join as Spy Master
              </div>
            </div>
          )}
          <h3>{`${capitalize(team)} Players`}</h3>
          {this.listPlayers(team)}
          <div
            onClick={() => this.handleJoin(team)}
            className={`ui ${team} basic button`}
          >{`Join the ${capitalize(team)} Team`}</div>
        </div>
      </div>
    );
  }

  handleJoin = role => {
    const { createGamePlayer, gameId } = this.props;
    createGamePlayer({ role, gameId });
  };

  render() {
    return (
      <div className="ui grid">
        <div className="eight wide column">{this.renderTeam('blue')}</div>
        <div className="eight wide column">{this.renderTeam('red')}</div>
      </div>
    );
  }
}

const capitalize = str => {
  return str[0].toUpperCase() + str.slice(1);
};

const mapStateToProps = state => {
  return {
    players: state.game.players,
    gameId: state.game.id,
    currentuser: state.auth.currentUser
  };
};

export default connect(mapStateToProps, { createGamePlayer })(TeamSelection);
