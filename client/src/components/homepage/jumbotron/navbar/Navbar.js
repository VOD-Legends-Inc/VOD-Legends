import React, { Component } from "react";
import "./Navbar.css";

const Navbar= () => (

    <nav className="navbar navbar-default navigation">
        <div id="headerContainer" className="container">
      
          <div className="col-sm-6 col-md-6 col-lg-6">
              <div className='navbar-header brand-name'>
                <img src="./images/vodlg.png" alt="logoImage" />
              </div>
          </div>

            <div className="col-sm-6 col-md-6 col-lg-6">
                <ul className="nav navbar-nav navbar-right">
                    <img src="signupButton" id="signupModalButton" />
                    <li>
                        <a href="/coachSignup">
                            <button id="becomeCoachButton" className="btn btn-primary">Become a Coach</button>
                        </a>
                    </li>

                    <li>
                        <a href="/studentSignup">
                            <button id="signupModalButton" className="btn btn-primary">Sign Up</button>
                        </a>
                    </li>
                    
                    <li>
                        <a href="/login">
                            <button id="loginModalButton" className="btn btn-primary">Login</button>
                        </a>
                    </li>

                </ul>
            </div>             
        </div>
    </nav>
);

export default Navbar;
