import React from 'react';
import Nav from '../Nav/Nav';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faHandshake } from '@fortawesome/free-solid-svg-icons';



const About = () => {
    
  return (
    <div>
        <Nav/>  
        <hr/>
        <div className='about-container'>
          <div className='about-hero'>
            <div className='about-image'>
              <img src='../images/med-workers.webp' alt=''/>
            </div>
            <div className='about-text'>
              <h2>Who We Are</h2>
              <p>
              Lofty HealthCare is a leading supplier of care and nursing staff to the 
              private and public sectors. Our Agency has consistently outsourced professional,
              trained, compliant and respectable staff to a myriad of the UK’s leading care 
              groups where they provide outstanding care, encourage independence, safe-guard and 
              respect service users. 
              </p>
            </div>
          </div>
          <hr/>
          <div className='core-values'>
            <h2>Our Core Values</h2>
            <h3>3CR</h3>
            <div className='values'>
              <div className='collaboration'>
                <FontAwesomeIcon icon={faHandshake} className='collab-icon'/>
                <h4>Collaboration</h4>
                <p>
                  We promote a culture of teamwork, open communication, 
                  and shared knowledge.
                </p>
              </div>  
              <div className='collaboration'>
                <FontAwesomeIcon icon={faHandshake} className='collab-icon'/>
                <h4>Collaboration</h4>
                <p>
                  We promote a culture of teamwork, open communication, 
                  and shared knowledge.
                </p>
              </div>
              <div className='collaboration'>
                <FontAwesomeIcon icon={faHandshake} className='collab-icon'/>
                <h4>Collaboration</h4>
                <p>
                  We promote a culture of teamwork, open communication, 
                  and shared knowledge.
                </p>
              </div>
              <div className='collaboration'>
                <FontAwesomeIcon icon={faHandshake} className='collab-icon'/>
                <h4>Collaboration</h4>
                <p>
                  We promote a culture of teamwork, open communication, 
                  and shared knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
