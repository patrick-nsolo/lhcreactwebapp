import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import './Leftnav.css';


const Leftnav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className={`left-nav-container ${isNavOpen ? 'open' : ''}`}>
        <div className='hamburger' onClick={handleToggleNav}>
            <FontAwesomeIcon icon={isNavOpen ? faTimes : faBars} />
        </div>
        <div className={`left-nav ${isNavOpen ? 'open' : ''}`}>
            <div className='socials'>
                <a href='/'><FontAwesomeIcon icon={faFacebook} className='social-icon'/></a>
                <a href='/'><FontAwesomeIcon icon={faTwitter}  className='social-icon'/></a>
                <a href='https://www.instagram.com/loftyhealthcare/'>
                  <FontAwesomeIcon icon={faInstagram} className='social-icon'/>
                </a>  
                <a href='/'><FontAwesomeIcon icon={faLinkedin} className='social-icon'/></a> 
            </div>
        </div>     
    </div>
  )
}

export default Leftnav
