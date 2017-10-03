import React, { Component } from "react";
import "./Navbar.css";

class Navbar extends Component {
    state = {
        signupModalVisible: false,
        loginModalVisible: false,
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        repeatPW: "",
        loginPassword: "",
        loginUsername: "",
    };

    signupClick = event => {
        alert("this worked");
        this.setState({signupModalVisible: true});
    }

    signupCancel = event => {
        alert("this worked");
        this.setState({signupModalVisible: false});
    }


    loginClick = event => {
        alert("this worked");
        this.setState({loginModalVisible: true});
    }

    loginCancel = event => {
        alert("this worked");
        this.setState({loginModalVisible: false});
    }

    handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }


    render() {
        return (
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

                                <button id="signupModalButton" onClick={this.signupClick}>Sign Up</button>
                                
                                {
                                    this.state.signupModalVisible
                                    ?
                                    <div id="signupModal">

                                        <form>

                                            <span id="closeSignupModal" className="close" onClick={this.signupCancel}>×</span>

                                            <div className="container">

                                                <h3 className="center-block">vodLegends Sign Up</h3>

                                           

                                                <label><b>First Name</b></label><br/>
                                                <input type="text" value={this.state.firstName} onChange={this.handleInputChange} name="firstName" placeholder="Enter First Name" required/><br/>
                                                
                                                <label><b>Last Name</b></label><br/>
                                                <input type="text" value={this.state.lastName} onChange={this.handleInputChange} name="lastName" placeholder="Enter Last Name" required /><br/>
                                               
                                       

                                          
                                                <label><b>Username</b></label><br/>
                                                <input type="text" value={this.state.userName} onChange={this.handleInputChange} name="userName" placeholder="Enter Username" id="userNameInput" required /><br/>
                                                
                                          

                                  
                                                <label><b>Email</b></label><br/>
                                                <input type="text" value={this.state.email} onChange={this.handleInputChange} name="email" placeholder="Enter Email" id="emailInput" required /><br/>
                                          

                                                <label><b>Password</b></label><br/>
                                                <input type="password" value={this.state.password} onChange={this.handleInputChange} name="password" placeholder="Enter Password" id="passwordInput" required /><br/>
                                          

                                                <label><b>Repeat Password</b></label><br/>
                                                <input type="password" value={this.state.repeatPW} onChange={this.handleInputChange} name="repeatPW" placeholder="Repeat Password" id="repeatInput" required /><br/>                     

                                                <div className="center-block">
                                                    
                                                    <button type="submit" >Sign Up</button>

                                                    <button type="button" onClick={this.signupCancel}>Cancel</button>

                                                </div>

                                            </div>

                                        </form>

                                    </div>
                                    : null
                                }


                            </li>
                            
                            <li>

                                <button id="loginModalButton" onClick={this.loginClick}>Login</button>

                                {
                                    this.state.loginModalVisible
                                    ?
                                    <div id="loginModal">
                                        
                                        <form>

                                            <span id="closeLoginModal" className="close" onClick={this.loginCancel}>×</span>

                                            <div className="container">

                                                <h3 className="mcenter-block">MyStorya Login</h3>
                                                
                                                
                                                        <label><b>Username</b></label><br/>
                                                        <input type="text" value={this.state.loginUsername} onChange={this.handleInputChange} placeholder="Enter Username" id="userNameLogin" name="loginUsername" required /><br/>
                                               
                                                
                                              
                                                        <label><b>Password</b></label><br/>
                                                        <input type="password" value={this.state.loginPassword} onChange={this.handleInputChange} name="loginPassword"  placeholder="Enter Password" id="passwordLogin" required />
                                                

                                                <div className="center-block">

                                                    <button type="submit">Login</button>
                                                    
                                                    <button type="button" onClick={this.loginCancel}>Cancel</button>

                                                </div>
                                            
                                            </div>

                                        </form>

                                    </div>
                                    : null
                                }

                            </li>

                        </ul>
                    </div>

                                   
                </div>

            </nav>
        )
    }

}

export default Navbar;
