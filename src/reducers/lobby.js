const initialState = { games: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CURRENT_GAMES':
      return { ...state, games: action.games };
    default:
      return state;
  }
};
