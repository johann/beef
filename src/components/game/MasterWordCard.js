import React from 'react';
import WordCard from './WordCard';

const MasterWordCard = ({ card }) => {
  return <WordCard card={card} identity={card.identity} />;
};
export default MasterWordCard;
