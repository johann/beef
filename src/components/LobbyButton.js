import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <div className="item">
      <Link to="/games/new">
        <div className="ui basic violet button">Back to Lobby</div>
      </Link>
    </div>
  );
};
