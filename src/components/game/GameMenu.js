import React from 'react';

import Chat from '../chat/Chat';
import TurnButton from './TurnButton';
import LobbyButton from '../LobbyButton';

const GameMenu = () => {
  return (
    <div>
      <Chat />
      <div className="ui menu">
        <TurnButton />
        <LobbyButton />
      </div>
    </div>
  );
};

export default GameMenu;
