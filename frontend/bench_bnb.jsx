import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store; // testing
  window.login = login; // testing
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
