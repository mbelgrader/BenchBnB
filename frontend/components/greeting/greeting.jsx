import React from 'react';
import { Link } from 'react-router';

const links = () => (
  <nav>
    <Link to="/signup">Sign up</Link>
    <br />
    <Link to="/login">Login</Link>
  </nav>
);

const message = (currentUser, logout) => (
	<div>
    <h2>Hi, {currentUser.username}!</h2>
    <button onClick={logout}>Log Out</button>
	</div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? message(currentUser, logout) : links()
);

export default Greeting;
