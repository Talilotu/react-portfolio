import React from "react";
import { NavLink } from "react-router-dom";

import "../Header/Header";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "link active" : "link)")}
        >
          <h4>AT</h4>
        </NavLink>
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
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "link active" : "link)"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/training"
                className={({ isActive }) =>
                  isActive ? "link active" : "link)"
                }
              >
                Training
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? "link active" : "link)"
                }
              >
                Projects
              </NavLink>
            </li>

            <li className="nav-item {}">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "link active" : "link)"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
