const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_GAME':
      return action.messages;
    case 'NEW_MESSAGE':
      const msg = state.find(msg => msg.id === action.message.id);
      return msg ? state : [...state, action.message];
    default:
      return state;
  }
};
