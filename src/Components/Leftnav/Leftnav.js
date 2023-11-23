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
                <FontAwesomeIcon icon={faFacebook} /> 
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />  
                <FontAwesomeIcon icon={faLinkedin} /> 
            </div>
        </div>     
    </div>
  )
}

export default Leftnav
