import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Leftnav.css';


const Leftnav = () => {
  return (
    <div className='left-nav-container'>
        <div className='hamburger'>
            <FontAwesomeIcon icon={faBars} />
        </div>
        <div className='left-nav'>
            <div className='socials'>
                <a href='/'><FontAwesomeIcon icon={faFacebook} className='social-icon'/></a>
                <a href='/'><FontAwesomeIcon icon={faTwitter}  className='social-icon'/></a>
                <a href='/'><FontAwesomeIcon icon={faInstagram} className='social-icon'/></a>  
                <a href='/'><FontAwesomeIcon icon={faLinkedin} className='social-icon'/></a> 
            </div>
        </div>     
    </div>
  )
}

export default Leftnav
