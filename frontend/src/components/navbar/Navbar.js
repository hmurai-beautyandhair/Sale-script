import React from "react";

import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <div id="bar" className="navDone">
      <div className="navBB">
        <Link style={{ textDecoration: "none" }} to="/">
          <div id="logoNav" className="logoNav2" >
            <img src={require("../../images/logo.png")} alt="profile" />
            <h1 id='lauchPad'>LaunchPad</h1>
          </div>
        </Link>
      </div>
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>

          <ul id="menu" className="navAll">
            <Link style={{ textDecoration: "none" }} to="/">
              <div className="nav-links">
                <img
                  src={require("../../images/home_icon.png")}
                  alt="profile"
                />
                <p>Home</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/new-hire">
              <div className="nav-links">
                <img
                  src={require("../../images/new_hire_icon.png")}
                  alt="freelancer"
                  id="jobImg"
                />
                <p>New Hire</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/draft">
              <div className="nav-links">
                <img
                  src={require("../../images/sales_icon.png")}
                  alt="searchJob"
                />
                <p>Sales</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/inventory">
              <div className="nav-links">
                <img
                  src={require("../../images/inventory_icon.png")}
                  alt="company"
                />
                <p>Inventory</p>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/marketing">
              <div className="nav-links">
                <img
                  src={require("../../images/marketing_icon.png")}
                  alt="postJob"
                />
                <p>Marketing</p>
              </div>
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              onClick={props.logout}
              to="/"
            >
              <div className="nav-links">
                <img
                  id="contact"
                  src={require("../../images/log_out_icon.png")}
                  alt="contact"
                />
                <p>Log Out</p>
              </div>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
