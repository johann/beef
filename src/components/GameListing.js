import React from 'react';
import { Link } from 'react-router-dom';

const GameListing = ({ game }) => {
  return (
    <li key={game.id}>
      <Link to={`/games/${game.id}`}>{game.name}</Link>
      <p>{game.players.map(player => player).join(', ')}</p>
    </li>
  );
};

export default GameListing;
