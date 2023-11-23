import React from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ isNavOpen, handleToggleNav }) => {
  return (
    <div className='Nav'>
      <div className='logo'>
          <img src='../images/lofty-logo.png' alt=''/>
      </div>
      <div className='navigation'>
          <ul className={`nav ${isNavOpen ? 'open' : ''}`}>
              <li className='nav-link'><a href='/'>About</a></li>
              <li className='nav-link'><a href='/'>Clients</a></li>
              <li className='nav-link'><a href='/'>Services</a></li>
              <li className='nav-link'><a href='/'>Teams</a></li>
              <li className='nav-link'><a href='/'>Contact Us</a></li>
          </ul>
      </div>
      <div className='hamburger' onClick={handleToggleNav}>
          <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
      </div>
    </div>
  )
}

export default Nav;
