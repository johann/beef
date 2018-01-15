export default (state, action) => {
  switch (action.type) {
    case 'LOAD_GAME':
      return action.players;
    case 'ADD_PLAYER':
      return [...state, action.player];
    default:
      return state;
  }
};
