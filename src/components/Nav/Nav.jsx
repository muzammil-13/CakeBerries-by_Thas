import React from 'react';
import { NavLink } from 'react-router-dom'; // Use NavLink for active styling
import './Nav.css';

function Nav() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li> {/* Use 'end' prop */}
        <li><NavLink to="/login">Login</NavLink></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default Nav;
