import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import {Link} from 'react-router-dom';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Student Information System
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                <Link to = "/profile"> Profile </Link>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Sign Out
              </NavLink>
            </li>
            </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;