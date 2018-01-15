const getPositions = (identity, cards) => {
  return cards
    .filter(card => {
      return card.identity === identity;
    })
    .reduce((memo, card) => {
      memo[card.index] = card;
      return memo;
    }, {});
};

export default (state, action) => {
  switch (action.type) {
    case 'LOAD_GAME':
      return {
        blue_spies: getPositions('blue_spy', action.cards),
        red_spies: getPositions('red_spy', action.cards),
        innocent_bystanders: getPositions('innocent_bystander', action.cards),
        assassin: getPositions('assassin', action.cards)
      };
    default:
      return state;
  }
};
