import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="row bg-white">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">ALIVE BOTSWANA</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
              <Link to="/">
              Home
              </Link>
              </a> 
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
              <Link to="/login">
              Login
              </Link>
              </a> 
            </li>
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">
              <Link to="/signup">
              Signup
              </Link>
              </a> 
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
