import React from 'react';
import Nav from '../Nav/Nav';
import './About.css';
import Values from '../Values/Values';


const About = () => {
  return (
    <div className='hide'>
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
              Lofty HealthCare stands as a premier provider of care and nursing personnel 
              to both the private and public sectors. Our agency has consistently sourced 
              and deployed skilled, compliant, and reputable staff to numerous distinguished 
              care groups across the UK. Within these organizations, our personnel consistently 
              deliver exceptional care, foster independence, safeguard, and demonstrate utmost 
              respect for service users. 
              </p>
            </div>
          </div>
          <hr/>
          <Values/>
          <hr/>
          <div className='expertise-hero'>
            <div className='expertise-image'>
              <img src='../images/staff.webp' alt=''/>
            </div>
            <div className='expertise-text'>
              <h2>Our Expertise</h2>
              <p>
              We possess a comprehensive comprehension of our client's business intricacies 
              and requisites, enabling us to deliver services meticulously tailored to 
              address these specific needs with the aim of surpassing their expectations. 
              </p>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default About
