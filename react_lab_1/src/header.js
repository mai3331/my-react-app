import React from 'react';
import logo from './images.jpeg'
const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
              <a className="navbar-brand" href="/">
                  <img src={logo} alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                      <a className="nav-link" aria-current="page" href="/">Home</a>
                      <a className="nav-link" href="/">About</a>
                      <a className="nav-link bg-secondary" href="/">Profile</a>
                  </div>
              </div>
          </div>
      </nav>
  );
};

export default Header;
