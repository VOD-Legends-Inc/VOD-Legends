import React from "react";
import "./Navbar.css";

const Navbar = () => (

<nav id="studentNavbar" className="navbar navbar-default">
    <div id="headerContainer" className="container">
  
      <div className="col-sm-6 col-md-6 col-lg-6">
          <div className='navbar-header brand-name'>
            <img src="./images/logo2.png" />
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
