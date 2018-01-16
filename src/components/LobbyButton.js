import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <Link to="/games/new">
      <div className="ui basic violet button">Back to Lobby</div>
    </Link>
  );
};
