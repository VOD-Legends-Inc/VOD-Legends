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
    }

    coachClick = event => {
        alert("this worked");
    }

    loginClick = event => {
        alert("this worked");
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
                        <img src="http://www.clker.com/cliparts/O/v/c/b/i/6/generic-logo.svg" alt="logoImage" />
                      </div>
                  </div>

                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <ul className="nav navbar-nav navbar-right">
                            
                            <li>

                                <button id="becomeCoachButton" onClick={this.coachClick}>Become a Coach</button>
                                
                                

                            </li>

                            <li>

                                <button id="signupModalButton" onClick={this.signupClick}>Sign Up</button>
                                
                                

                            </li>
                            
                            <li>

                                <button id="loginModalButton" onClick={this.loginClick}>Login</button>

                                

                            </li>

                        </ul>
                    </div>

                                   
                </div>

            </nav>
        )
    }

}

export default Navbar;
