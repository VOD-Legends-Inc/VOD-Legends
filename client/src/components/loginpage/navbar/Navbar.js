import React from "react";
import "./Navbar.css";

const Navbar = () => (

<nav id="coachNavbar">
    <div id="headerContainer" className="container-fluid">
  
      <div id="leftNavbar">
        <a href="/coach"><img src="./images/logo.png" /></a>
      </div>

      <div id="navLinks">
        <ul className="nav nav-pills">
          <li className="active"><a data-toggle="pill" href="#vodInbox">VOD Request Inbox</a></li>
          <li><a data-toggle="pill" href="#coachProfile">Your Profile</a></li>
        </ul>  
      </div>

      <div id="rightNavbar">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" href="/login">Login
          <span className="caret"></span></button>
        </div>
      </div>
                       
    </div>

</nav>
);

export default Navbar;
