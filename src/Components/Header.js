import React from 'react'
import logo from '../logo.svg'
import bgimg from '../assets/bgimg.jpg'
import '../assets/css/Header.css';

function Header() {
  return (
    
      <div className='header bg-light entertainment'>
        <div className='row'>
          <div className='col-6 d-flex justify-content-center align-items-center'>
            <img src={logo} alt='text'></img>
          </div>
          <div className='col-6 d-flex align-items-center'>
            <h3>ENTERTAINMENT</h3>
          </div>
        </div>  
      </div>
    
  );
}

export default Header
