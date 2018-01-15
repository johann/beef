import { getWithToken, postWithToken, API_ROOT } from './config';

export const fetchGames = () => {
  return getWithToken(`${API_ROOT}/games`);
};

export const createGame = () => {
  return postWithToken(`${API_ROOT}/games`);
};
