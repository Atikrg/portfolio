import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.styles.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };
  return (
    <div className="navbar-component">
      <header>
        <button
          onClick={() => toggleVisibility()}
          className="button-close text-center"
          aria-label="Toggle Navigation"
        >
          {visible ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>

        <nav className={`navbar ${visible ? "open" : "close"}`}>
          <ul className={"navbar-list"}>
            <li className="navbar-link">
              <Link to="#Home" className="nav-link a  active">
                Home
              </Link>
            </li>
            <li className="navbar-link">
              <Link to="#Resume" className="nav-link">
                Resume
              </Link>
            </li>
            <li className="navbar-link">
              <Link to="#Portfolio" className="nav-link">
                Portfolio
              </Link>
            </li>

            <li className="navbar-link">
              <Link to="#certifications" className="nav-link">
                Certifications
              </Link>
            </li>
            <li className="navbar-link">
              <Link
                to="https://www.upwork.com/freelancers/atikrangnekar"
                className="nav-link"
              >
                Upwork
              </Link>
            </li>
            <li className="navbar-link">
              <Link to="#certifications" className="nav-link">
                SKILLS
              </Link>
            </li>

            <li className="navbar-link">
              <Link to="#certifications" className="nav-link">
                Experiences
              </Link>
            </li>
            <li className="navbar-link">
              <Link to="#about" className="nav-link">
                About me
              </Link>
            </li>
            <li className="navbar-link">
              <Link to="#Contact me" className="nav-link">
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
