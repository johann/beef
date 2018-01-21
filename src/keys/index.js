let API;
if (process.env.NODE_ENV === 'development') {
  API = {
    API_ROOT: `http://localhost:3001`,
    API_WS_ROOT: `ws://localhost:3001/cable`
  };
} else if (process.env.NODE_ENV === 'production') {
  API = {
    API_ROOT: `https://hidden-names-backend.herokuapp.com`,
    API_WS_ROOT: `wss://hidden-names-backend.herokuapp.com/cable`
  };
}

export default API;
