import React, { useState } from 'react';
import './Nav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = ( ) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleNav = () => {
      setIsNavOpen(!isNavOpen);
  };
  return (
    <div className='Nav'>
      <div className='logo'>
          <a href='/'><img src='../images/lofty-logo.png' alt=''/></a>
      </div>
      <div className='navigation'>
          <ul className={`menu ${isNavOpen ? 'open' : ''}`}>
              <li className='nav-link'><a href='/about'>About</a></li>
              <li className='nav-link'><a href='/clients'>Clients</a></li>
              <li className='nav-link'><a href='/services'>Services</a></li>
              <li className='nav-link'><a href='/teams'>Teams</a></li>
              <li className='nav-link'><a href='/contact'>Contact Us</a></li>
          </ul>
      </div>
      <div className='hamburger' onClick={handleToggleNav}>
          <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
      </div>
    </div>
  )
}

export default Nav;
