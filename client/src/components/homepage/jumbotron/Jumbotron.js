import React from "react";
import Navbar from "./navbar/Navbar";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron">
    <Navbar/><br/><br/><br/><br/>
    
    <h1 className="text-center textgold textborder"> Improve Your Skills! </h1>
  	 
     <p className="text-center textgold textborder">
        Submit your VOD today <br/>
        and receive Diamond level review and analysis.
      </p>

      <a href="/studentSignup">
        <img alt="getstartednow" className="getstarted center-block" src="./images/started.png" onClick={this.signupClick} />
      </a>
  </div>
);

export default Jumbotron;

