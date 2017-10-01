import React from "react";
import "./Navbar.css";

const Navbar = () => (

<nav id="coachNavbar">
    <div id="headerContainer" className="container-fluid">
  
      <div id="leftNavbar">
        <img src="./images/logo.png" />
      </div>

      <div id="navLinks">
        <ul className="nav nav-pills">
          <li className="active"><a data-toggle="pill" href="#vodInbox">VOD Request Inbox</a></li>
          <li><a data-toggle="pill" href="#coachVods">Your Students</a></li>
          <li><a data-toggle="pill" href="#coachProfile">Your Profile</a></li>
        </ul>  
      </div>

      <div id="rightNavbar">
        <div className="dropdown">
          <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Username
          <span className="caret"></span></button>
          <ul className="dropdown-menu">
            <li><a href="#">TBD #1</a></li>
            <li><a href="#">TDD #2</a></li>
            <li><a href="#">TBD #3</a></li>
          </ul>
        </div>
      </div>
                       
    </div>

</nav>
);

export default Navbar;
