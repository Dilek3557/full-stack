import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav 
        className="navbar navbar-expand-lg navbar-dark" 
        style={{ backgroundColor: 'rgba(158, 143, 241, 1)' }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/home">
            Full Stack Application
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >  
            <span className="navbar-toggler-icon"></span>

          </button>   
       
            <Link
            className="btn obtn-otline-light" 
            to="/adduser"
            style={{backgroundColor:'white'}}
            >Add User</Link>

        </div>
      </nav>
    </div>
  );
}
