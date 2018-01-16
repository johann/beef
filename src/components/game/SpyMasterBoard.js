import React from 'react';
import { connect } from 'react-redux';

import MasterWordCard from './MasterWordCard';
import ClueForm from './ClueForm';
import Chat from '../chat/Chat';
import LobbyButton from '../LobbyButton';

const SpyMasterBoard = props => {
  const wordCards = props.cards.map(card => (
    <MasterWordCard key={card.word} card={card} />
  ));

  return (
    <div className="SpyMasterBoard">
      <div className="board">{wordCards}</div>
      <ClueForm />
      <Chat />
      <LobbyButton />
    </div>
  );
};

const mapStateToProps = ({ game }) => {
  return { cards: game.cards };
};

export default connect(mapStateToProps)(SpyMasterBoard);
