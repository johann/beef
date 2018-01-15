import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import './index.css';
import 'semantic-ui-css/semantic.min.css';

import Root from './components/Root';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
