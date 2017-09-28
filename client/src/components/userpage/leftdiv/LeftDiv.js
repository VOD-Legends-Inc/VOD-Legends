import React from "react"; 
import "./LeftDiv.css";

const LeftDiv = () => (

<div id="leftDiv" className="col-sm-3 col-md-3 col-lg-3">

  <h3 className="text-center">Username</h3>
  <img id="profilePic" className="center-block" src="./images/empty_profile.png" />
  <p className="text-center">Credits: 0 <br /><a href='#'>Get More Credits</a></p>

  <ul className="nav nav-pills nav-stacked">
      <li className="active"><a data-toggle="pill" href="#userRequest">Request a VOD Review</a></li>
      <li><a data-toggle="pill" href="#userVods">Your VOD Reviews</a></li>
      <li><a data-toggle="pill" href="#userProgress">Track your Progress</a></li>
      <li><a data-toggle="pill" href="#userProfile">Your Profile</a></li>
  </ul>

</div> 

);

export default LeftDiv;
