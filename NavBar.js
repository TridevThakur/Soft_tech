import React from "react";
import { Link } from "react-router-dom";
import "./ima.css";

function NavBar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo" style={{ textDecoration: "none" }} >
          
     Soft Technologies Pvt Ltd
        </Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link
              to="/company"
              className="t"
              style={{ textDecoration: "none" }}
            >
              Company_Info
            </Link>
          </li>
          <li>
            <Link to="/login" className="t" style={{ textDecoration: "none" }}>
              Login{" "}
            </Link>
          </li>
          <li>
            <Link to="/signup" className="t" style={{ textDecoration: "none" }}>
              Sign-Up
            </Link>
          </li>
          <li
            onClick={() => {
              localStorage.clear();
            }}
          >
            <Link to="/login" className="t"  style={{textDecoration: "none"}}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
