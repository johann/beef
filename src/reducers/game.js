import cardsReducer from './cards';
import clueReducer from './clue';
import playersReducer from './players';
import identitiesReducer from './identities';

const initialState = {
  id: null,
  cards: [],
  clue: {
    word: '',
    number: ''
  },
  players: [],
  identities: {
    blue_spies: {},
    red_spies: {},
    innocent_bystander: {},
    assassin: {}
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_GAME':
      return {
        ...state,
        id: action.id,
        players: playersReducer(state.players, action),
        cards: cardsReducer(state.cards, action),
        clue: clueReducer(state.clue, action),
        identities: identitiesReducer(state.identities, action)
      };
    case 'REVEAL_IDENTITY':
      return {
        ...state,
        cards: cardsReducer(state.cards, action)
      };
    case 'UPDATE_BOARD':
      return { ...state, cards: cardsReducer(state.cards, action) };
    case 'NEW_CLUE':
      return { ...state, clue: clueReducer(state.clue, action) };
    case 'ADD_PLAYER':
      return { ...state, players: playersReducer(state.players, action) };
    default:
      return state;
  }
};
