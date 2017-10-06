import React from "react";
import Navbar from "./navbar/Navbar";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron">

    <Navbar />

    <img className="center-block" src="./images/vodlg.png" alt="vodlg" />
    
    <h1 className="text-center textyellow textborder"> Improve Your Skills! </h1>
	<p className="text-center textyellow textborder">
      Submit your VOD today <br/>
      and receive Diamond level review and analysis.
    </p>
    {/*<img alt="featureImage" className="triImage2 center-block" src="./images/challenger.png" />*/}
    <img alt="getstartednow" className="getstarted center-block" src="./images/started.png" onClick={this.signupClick} />

  </div>
);

export default Jumbotron;

