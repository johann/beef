import { getWithToken, headers, API_ROOT } from './config';

export const getCurrentUser = () => {
  return getWithToken(`${API_ROOT}/current_user`);
};

export const login = data => {
  return fetch(`${API_ROOT}/login/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};

export const signup = data => {
  return fetch(`${API_ROOT}/users/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
  }).then(res => res.json());
};
