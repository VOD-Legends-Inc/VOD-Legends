import React from "react"; 
import "./LeftDiv.css";

const LeftDiv = () => (

<div id="leftDiv" className="col-sm-2 col-md-2 col-lg-2">

  <button type="button" id="collapseButton" className="btn btn-default btn-xs pull-right">
    <span className="glyphicon glyphicon-chevron-left"></span>
  </button>	

  <h3 className="text-center">Username</h3>
  <img id="profilePic" className="center-block" src="./images/empty_profile.png" />
  <p className="text-center">Credits: 0 <br /><a href='#'>Get More Credits</a></p>

  <ul className="nav nav-pills nav-stacked">
    <li className="active"><a data-toggle="pill" href="#studentRequest">Request a VOD Review</a></li>
      <li><a data-toggle="pill" href="#studentVods">Your VOD Reviews</a></li>
      <li><a data-toggle="pill" href="#studentProgress">Track your Progress</a></li>
      <li><a data-toggle="pill" href="#studentProfile">Your Profile</a></li>
  </ul>

</div> 

);

export default LeftDiv;
