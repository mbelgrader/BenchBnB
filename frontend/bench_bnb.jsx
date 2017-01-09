import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions'; // testing
import { fetchBenches } from './actions/bench_actions'; // testing

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser} };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store; // testing
  window.login = login; // testing
  window.fetchBenches = fetchBenches; // testing

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
