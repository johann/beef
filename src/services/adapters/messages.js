import { postWithToken, API_ROOT } from './config';

export const createMessage = ({ gameId, text }) => {
  return postWithToken(`${API_ROOT}/messages`, { game_id: gameId, text });
};
