import React from 'react';
import Leftnav from '../Leftnav/Leftnav';
import './Home.css';

const Home = () => {
  return (
    <div className='grey-bg'>
      <Leftnav/>
      <div className='hero-content-container'>
        <div className='main-nav'>
            <div className='logo'>
                <img src='../images/lofty-logo.png' alt=''/>
            </div>
            <div className='navigation'>
                <ul className='nav'>
                    <li className='nav-link'><a href='/'>About</a></li>
                    <li className='nav-link'><a href='/'>Clients</a></li>
                    <li className='nav-link'><a href='/'>Services</a></li>
                    <li className='nav-link'><a href='/'>Teams</a></li>
                    <li className='nav-link'><a href='/'>Contact Us</a></li>
                </ul>
            </div>
        </div>
        <div className='hero-content'>
            <div className='hero-content-text'>
                <h2>YOUR STAFFING SOLUTIONS</h2>
                <h3>OUR PRIORITY</h3>
                <p>
                    Your reliable partner for temporary and permanent staffing solutions
                    We provide professional and trained staff to the Health and Social care sector.
                    Our recruits are highly skilled and the best within their various fields.
                </p>
                <div className='btns'>
                    <a href='/'>Login</a>
                    <a href='/'>Register</a>
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
