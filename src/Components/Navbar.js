import React from 'react'
import logo from '../logo.svg';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand">
              <img src={logo} alt='text' className='brandimg'></img>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" >Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Music</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" tabindex="-1" aria-disabled="true">Dance</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" tabindex="-1" aria-disabled="true">Sports</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" tabindex="-1" aria-disabled="true">Contact</a>
                </li>
              </ul>

            </div>
          </div>
        </nav>
    </div>
  )
}

export default Navbar


