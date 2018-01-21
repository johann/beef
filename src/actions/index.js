import adapter from '../services/adapters';

export const fetchCurrentGames = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  adapter.lobby.fetchGames().then(games => {
    dispatch({ type: 'FETCH_CURRENT_GAMES', games });
  });
};

export const createGame = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  adapter.lobby.createGame().then(game => {
    dispatch({ type: 'NEW_GAME', game });
  });
};

export const addGame = game => {
  return { type: 'NEW_GAME', game };
};

export const playerJoin = game => {
  return { type: 'PLAYER_JOIN', game };
};

export const fetchGame = id => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  return adapter.game
    .fetchGame(id)
    .then(({ id, cards, clue, players, messages, turn }) => {
      dispatch({ type: 'LOAD_GAME', id, cards, clue, players, messages, turn });
    });
};

export const updateBoard = ({ cards }) => {
  return { type: 'UPDATE_BOARD', cards };
};

export const revealIdentity = (word, id) => dispatch => {
  dispatch({ type: 'REVEAL_IDENTITY', word });

  adapter.game.updateCard(id);
};

export const createClue = (data, gameId) => dispatch => {
  adapter.game.createClue(data, gameId).then(clue => {
    dispatch({ type: 'NEW_CLUE', clue });
  });
};

export const changeClue = clue => {
  return { type: 'NEW_CLUE', clue };
};

export const createGamePlayer = ({ role, gameId }) => dispatch => {
  adapter.game.createGamePlayer({ role, gameId }).then(player => {
    dispatch({ type: 'ADD_PLAYER', player });
  });
};

export const addPlayer = player => {
  return { type: 'ADD_PLAYER', player };
};

export const fetchUser = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  adapter.auth.getCurrentUser().then(user => {
    dispatch({ type: 'SET_CURRENT_USER', user });
  });
};

export const loginUser = (username, password, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  adapter.auth.login({ username, password }).then(user => {
    if (!user.errors) {
      localStorage.setItem('token', user.token);
      dispatch({ type: 'SET_CURRENT_USER', user });
      history.push('/games/new');
    }
  });
};

export const signupUser = (userData, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  adapter.auth.signup(userData).then(user => {
    if (!user.errors) {
      localStorage.setItem('token', user.token);
      dispatch({ type: 'SET_CURRENT_USER', user });
      history.push('/games/new');
    }
  });
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  return { type: 'LOGOUT_USER' };
};

export const createMessage = ({ gameId, text }) => dispatch => {
  adapter.messages.createMessage({ gameId, text }).then(message => {
    dispatch({ type: 'NEW_MESSAGE', message });
  });
};

export const addMessage = message => {
  return { type: 'NEW_MESSAGE', message };
};
