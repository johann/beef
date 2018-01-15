import adapter from '../services/adapters';

export const fetchCurrentGames = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  adapter.lobby.fetchGames().then(games => {
    dispatch({ type: 'FETCH_CURRENT_GAMES', games });
  });
};

export const createGame = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  adapter.lobby.createGame().then(games => {
    dispatch({ type: 'FETCH_CURRENT_GAMES', games });
  });
};

export const fetchGame = id => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  adapter.game.fetchGame(id).then(({ id, cards, clue, players }) => {
    dispatch({ type: 'LOAD_GAME', id, cards, clue, players });
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

export const fetchUser = () => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  adapter.auth.getCurrentUser().then(user => {
    dispatch({ type: 'SET_CURRENT_USER', user });
  });
};

export const loginUser = (username, password, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  adapter.auth.login({ username, password }).then(user => {
    localStorage.setItem('token', user.jwt);
    dispatch({ type: 'SET_CURRENT_USER', user });
    history.push('/games/new');
  });
};

export const signupUser = (userData, history) => dispatch => {
  dispatch({ type: 'ASYNC_START' });

  adapter.auth.signup(userData).then(user => {
    localStorage.setItem('token', user.jwt);
    dispatch({ type: 'SET_CURRENT_USER', user });
    history.push('/games/new');
  });
};

export const logoutUser = () => {
  localStorage.removeItem('token');
  return { type: 'LOGOUT_USER' };
};
