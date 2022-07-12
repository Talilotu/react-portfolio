import React from "react";

import "../Portfolio/Header/Header.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a
          className="navbar-brand"
          href="https://shiny-pie-937396.netlify.app/"
        >
          AT
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="https://shiny-pie-937396.netlify.app/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://shiny-pie-937396.netlify.app/"
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://shiny-pie-937396.netlify.app/"
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://shiny-pie-937396.netlify.app/"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
