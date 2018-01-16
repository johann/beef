export default (state, action) => {
  switch (action.type) {
    case 'LOAD_GAME':
      return action.players;
    case 'ADD_PLAYER':
      const player = state.find(p => p.id === action.player.id);
      return player ? state : [...state, action.player];
    default:
      return state;
  }
};
