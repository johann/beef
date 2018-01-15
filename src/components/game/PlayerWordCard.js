import React from 'react';
import { connect } from 'react-redux';
import WordCard from './WordCard';
import { revealIdentity } from '../../actions';

const PlayerWordCard = ({ card, revealIdentity, gameId }) => {
  return (
    <WordCard
      revealIdentity={revealIdentity}
      card={card}
      identity={card.known ? card.identity : false}
    />
  );
};

export default connect(null, { revealIdentity })(PlayerWordCard);
