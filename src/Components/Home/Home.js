import React, { useState } from 'react';
import Leftnav from '../Leftnav/Leftnav';
import './Home.css';

const Home = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleToggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
  return (
    <div className='grey-bg'>
      <Leftnav isNavOpen={isNavOpen} handleToggleNav={handleToggleNav}/>
      <div className='hero-content-container'>
        <div className='main-nav'>
            <div className='logo'>
                <a href='/'><img src='../images/lofty-logo.png' alt=''/></a>
            </div>
            <div className='navigation'>
                <ul className={`nav ${isNavOpen ? 'open' : ''}`}>
                    <li className='nav-link'><a href='/about'>About</a></li>
                    <li className='nav-link'><a href='/clients'>Clients</a></li>
                    <li className='nav-link'><a href='/services'>Services</a></li>
                    <li className='nav-link'><a href='/teams'>Teams</a></li>
                    <li className='nav-link'><a href='/contact'>Contact Us</a></li>
                </ul>
            </div>
        </div>
        <div className='hero-content'>
            <div className='hero-content-text'>
                <h2>YOUR STAFFING SOLUTIONS</h2>
                <h3>OUR PRIORITY</h3>
                <p>
                    We are your reliable partner for temporary and permanent staffing solutions.<br/>
                    We provide professional and proficient staff to the Health and Social care sector.
                    Our recruits are highly skilled and the best within their various fields.
                </p>
                <div className='btns'>
                    <a href='/' className='login'>Login</a>
                    <a href='/' className='register'>Register</a>
                </div>
            </div>
            <div className='hero-img'>
                <img src='../images/health-worker.png' alt=''/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
