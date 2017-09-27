import React from "react";

const Navbar = () => (

<nav className="navbar navbar-default navigation">
    <div id="headerContainer" className="container">
  
      <div className="col-sm-6 col-md-6 col-lg-6">
          <div className='navbar-header brand-name'>
            <img src="http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg" />
          </div>
      </div>

        <div className="col-sm-6 col-md-6 col-lg-6">
            <ul className="nav navbar-nav navbar-right">
  
                <li>

                    <button id="signupModalButton">Sign Up</button>

                    <div id="signupModal" className="modal">

                        <form className="modal-content animate">

                            <span id="closeSignupModal" className="close">×</span>

                            <div id="modalContainer" className="container">

                                <h3 className="modalTitle center-block">MyStorya Sign Up</h3>

                                <div className="row">

                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <label><b>First Name</b></label><br/>
                                        <input id="firstNameInput" type="text" placeholder="Enter First Name" required/>
                                    </div>

                                    <div className="col-sm-6 col-md-6 col-lg-6">
                                        <label><b>Last Name</b></label><br/>
                                        <input id="lastNameInput" type="text" placeholder="Enter Last Name" required />
                                    </div>

                                </div> 

                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <label><b>Username</b></label><br/>
                                        <input type="text" placeholder="Enter Username" id="userNameInput" name="username" required />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <label><b>Email</b></label><br/>
                                        <input type="text" placeholder="Enter Email" id="emailInput" name="email" required />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <label><b>Password</b></label><br/>
                                        <input type="password" placeholder="Enter Password" id="passwordInput" name="psw" required />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <label><b>Repeat Password</b></label><br/>
                                        <input type="password" placeholder="Repeat Password" id="repeatInput" name="psw-repeat" required />
                                    </div>
                                </div>                    
                                
                                <p>By creating an account you agree to our <a href="#">Terms & Privacy Policies</a>.</p>

                                <div className="modalButtons center-block">
                                    
                                    <button type="submit" id="submitSignupButton" className="pull-left" href="./profile">Sign Up</button>

                                    <button type="button" id="cancelSignupButton" className="pull-right">Cancel</button>

                                </div>

                            </div>

                        </form>

                    </div>

                </li>
                
                <li>

                    <button id="loginModalButton">Login</button>

                    <div id="loginModal" className="modal">
                        
                        <form className="modal-content animate">

                            <span id="closeLoginModal" className="close">×</span>

                            <div id="modalContainer" className="container">

                                <h3 className="modalTitle center-block">MyStorya Login</h3>
                                
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <label><b>Username</b></label>
                                        <input type="text" placeholder="Enter Username" id="userNameLogin" name="username" required />
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <label><b>Password</b></label><br/>
                                        <input type="password" placeholder="Enter Password" id="passwordLogin" name="psw" required />
                                    </div>
                                </div>

                                <div className="modalButtons center-block">

                                    <button type="submit" id="submitLoginButton" className="pull-left">Login</button>
                                    
                                    <button type="button" id="cancelLoginButton" className="pull-right">Cancel</button>

                                </div>
                           
                                <span id="forgotPassword">Forgot Your <a href="#">Password?</a></span>
                            
                            </div>

                        </form>

                    </div>

                </li>

            </ul>
        </div>

                       
    </div>

</nav>
);

export default Navbar;
