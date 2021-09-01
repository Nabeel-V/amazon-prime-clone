import React from "react";
import "./NavBar.css";
import logo from "../../Images/prime.png";
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className="main-body">
      <div className="nav-bar">
        <nav class="navbar navbar-expand-lg navbar-dark ">
          <div class="container-fluid">
            <div className="prime-logo">
              <img className="logo" src={logo} alt="Logo" />
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/tvshows">
                    TV  Shows
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/movies">
                    Movies
                  </Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link active" to="/kids">
                    Kids
                  </Link>
                </li>
              </ul>
              <div className="right-section">
                <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
