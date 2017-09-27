import React from "react"; 
import "./LeftDiv.css";

const LeftDiv = () => (

<div id="leftDiv" className="col-sm-3 col-md-3 col-lg-3">

  <h3 className="text-center">Username</h3>
  <img id="profilePic" className="center-block" src="./images/empty_profile.png" />
  <br/>
  <ul className="nav nav-pills nav-stacked">
    <li className="active"><a data-toggle="pill" href="#coachRequest">VOD Request Inbox</a></li>
      <li><a data-toggle="pill" href="#coachStudents">Your Students</a></li>
      <li><a data-toggle="pill" href="#coachProfile">Your Profile</a></li>
  </ul>

</div> 

);

export default LeftDiv;
