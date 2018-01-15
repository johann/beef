import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ActionCableProvider } from 'react-actioncable-provider';

import App from './App';
import { API_WS_ROOT } from '../services/adapters/config';

const Root = ({ store }) => {
  return (
    <Router>
      <ActionCableProvider url={API_WS_ROOT}>
        <Provider store={store}>
          <Route path="/" component={App} />
        </Provider>
      </ActionCableProvider>
    </Router>
  );
};

export default Root;
