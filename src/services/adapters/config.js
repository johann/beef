import keys from '../../keys';

export const API_ROOT = keys.API_ROOT;
export const API_WS_ROOT = keys.API_WS_ROOT;

export const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
};

export const getWithToken = url => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    headers: { Authorization: token }
  }).then(res => res.json());
};

export const postWithToken = (url, data = {}) => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    method: 'POST',
    headers: { ...headers, Authorization: token },
    body: JSON.stringify(data)
  }).then(res => res.json());
};

export const patchWithToken = (url, data = {}) => {
  const token = localStorage.getItem('token');
  return fetch(url, {
    method: 'PATCH',
    headers: { ...headers, Authorization: token },
    body: JSON.stringify(data)
  }).then(res => res.json());
};
