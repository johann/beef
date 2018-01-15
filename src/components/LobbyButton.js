import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="ui basic violet button">
      <Link to="/games/new">Back to Lobby</Link>
    </div>
  );
};
