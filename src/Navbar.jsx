import React from "react";
import "./Navbar.css";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="logo-box">
        <li className="logo align-items-center" href="#">
          {"<Sc />"}
        </li>
      </div>
      <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#experience">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Project
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
