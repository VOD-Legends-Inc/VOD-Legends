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
                        <img src="./images/vodsym1.png" alt="logoImage" />
                      </div>
                  </div>

                    <div className="col-sm-6 col-md-6 col-lg-6">
                        <ul className="nav navbar-nav navbar-right">
                            <img src="signupButton" id="signupModalButton" onClick={this.signupClick} />
                            <li>

                                <button id="becomeCoachButton" onClick={this.coachClick}>Become a Coach</button>
                                
                                

                            </li>

                            <li>

                                <button id="signupModalButton" onClick={this.signupClick}>Sign Up</button>
                                {/*<img src="signupButton" id="signupModalButton" onClick={this.signupClick} />*/}
                                

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
