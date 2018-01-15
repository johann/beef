import {
  getWithToken,
  postWithToken,
  patchWithToken,
  API_ROOT
} from './config';

export const fetchGame = id => {
  return getWithToken(`${API_ROOT}/games/${id}`);
};

export const updateCard = id => {
  return patchWithToken(`${API_ROOT}/game_cards/${id}`);
};

export const createClue = (data, gameId) => {
  return postWithToken(`${API_ROOT}/clues/`, { ...data, game_id: gameId });
};

export const createGamePlayer = ({ role, gameId }) => {
  return postWithToken(`${API_ROOT}/game_players/`, {
    role,
    game_id: gameId
  });
};
