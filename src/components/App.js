import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Auth from './auth/Auth';
import Lobby from './Lobby';
import Game from './game/Game';

class App extends Component {
  render() {
    return (
      <div className="ui container App">
        <Switch>
          <Route path="/login" component={Auth} />
          <Route path="/games/new" component={Lobby} />
          <Route path="/games/:id" component={Game} />
        </Switch>
      </div>
    );
  }
}

export default App;
