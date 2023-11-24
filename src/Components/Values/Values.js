import React, { useState, useEffect } from 'react';
import './Value.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faHandsHelping, faCube, faHeart, faChalkboardUser } from '@fortawesome/free-solid-svg-icons';

const Values = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
        setIsVisible(true);
        }, 100);
        return () => clearTimeout(timeout);
    }, []);
  return (
    <div className='values-container'>
        <div className='core-values'>
            <h2>Our Core Values</h2>
            <h3>3CR</h3>
            <div className='values'>
              <div className={`collaboration collaboration-transition ${isVisible ? 'appeared' : ''}`}>
                <FontAwesomeIcon icon={faHandsHelping} className='collab-icon'/>
                <h4>Collaboration</h4>
                <p>
                  We promote a culture of teamwork, open communication, 
                  and shared knowledge.
                </p>
              </div>  
              <div className='compassion'>
                <FontAwesomeIcon icon={ faHeart } className='collab-icon'/>
                <h4>Compassion</h4>
                <p>
                  We promote a culture of teamwork, open communication, 
                  and shared knowledge.
                </p>
              </div>
              <div className='commitment'>
                <FontAwesomeIcon icon={faChalkboardUser } className='collab-icon'/>
                <h4>Commitment</h4>
                <p>
                  We promote a culture of teamwork, open communication, 
                  and shared knowledge.
                </p>
              </div>
              <div className='respect'>
                <FontAwesomeIcon icon={faCube } className='collab-icon'/>
                <h4>Respect</h4>
                <p>
                  We promote a culture of teamwork, open communication, 
                  and shared knowledge.
                </p>
              </div>
            </div>
          </div> 
    </div>
  )
}

export default Values
