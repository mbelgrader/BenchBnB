import React from 'react';
import ReactDOM from 'react-dom';
import { signup, login, logout} from './util/session_api_util';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  window.signup = signup; // testing only
  window.login = login; // testing only
  window.logout = logout; // testing only

  const store = configureStore();
  window.store = store; // testing only

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
});
