import React from 'react';
import Nav from '../Nav/Nav';
import './About.css';

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
        </div>
    </div>
  )
}

export default About
