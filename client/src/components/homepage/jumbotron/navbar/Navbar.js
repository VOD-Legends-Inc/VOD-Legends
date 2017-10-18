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
                        <img src="./images/vodsym1.png" alt="logoImage" />
                      </div>
                  </div>

                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <ul className="nav navbar-nav navbar-right">
                            <img src="signupButton" id="signupModalButton" onClick={this.signupClick} />
                            <li>

                                <a href="/coachSignup">
                                    <button id="becomeCoachButton" onClick={this.coachClick} className="btn btn-primary">Become a Coach</button>
                                </a>
                                

                            </li>

                            <li>
                                <a href="/studentSignup">
                                    <button id="signupModalButton" className="btn btn-primary" onClick={this.signupClick}>Sign Up</button>
                                </a>


                                <button id="signupModalButton" onClick={this.signupClick}>Sign Up</button>
                                {/*<img src="signupButton" id="signupModalButton" onClick={this.signupClick} />*/}

                                

                            </li>
                            
                            <li>
                                <a href="/login">
                                    <button id="loginModalButton" onClick={this.loginClick} className="btn btn-primary">Login</button>
                                </a>
                                

                            </li>

                        </ul>
                    </div>

                                   
                </div>

            </nav>
        )
    }

}

export default Navbar;
