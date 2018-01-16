import React from 'react';
import { connect } from 'react-redux';

import PlayerWordCard from './PlayerWordCard';
import LobbyButton from '../LobbyButton';
import Chat from '../chat/Chat';

const Board = props => {
  const wordCards = props.cards.map(card => (
    <PlayerWordCard key={card.word} card={card} />
  ));

  return (
    <div>
      <div className="board">{wordCards}</div>
      <div className="ui menu">
        <div className="item">
          <p>Current Clue:</p>
        </div>
        <div className="item">{renderClue(props.clue)}</div>
      </div>
      <Chat />
      <LobbyButton />
    </div>
  );
};

const renderClue = clue => {
  return clue.word ? (
    <h2>{`${clue.word}: ${clue.number}`}</h2>
  ) : (
    <p>Waiting for Spy Master...</p>
  );
};

const mapStateToProps = ({ game }) => {
  return { cards: game.cards, clue: game.clue };
};

export default connect(mapStateToProps)(Board);
