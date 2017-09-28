import React from "react";
import "./Navbar.css";

const Navbar = () => (

<nav id="studentNavbar" className="navbar navbar-default navigation">
    <div id="headerContainer" className="container">
  
      <div className="col-sm-6 col-md-6 col-lg-6">
          <div className='navbar-header brand-name'>
            <img src="http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg" />
          </div>
      </div>

        <div className="col-sm-6 col-md-6 col-lg-6">
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#"><span className="glyphicon glyphicon-align-justify"></span></a></li>
            </ul>
        </div>

                       
    </div>

</nav>
);

export default Navbar;
