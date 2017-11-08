import React from "react";
import "./FeaturesDiv.css";

const FeaturesDiv = () => (
  <div id="featuresDiv" className="sectionDiv">
    <div className="container">
      
     
  <div className="sectionDiv sectionDiv2">
    <div className="container">
      
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6 text-center">
          <h2>Built-in VOD Review Interface and Messaging</h2>
          <br></br>
          <p>Our easy-to-use VOD Review Interface allows students to view the exact moments in the game a coaches comment is related to. Additionally, our built-in messaging system makes it so asking your coach a question is quick and simple!</p>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
          <img className="triImage featureImg center-block" alt="featureImage" src="./images/growinglinechart.jpg" />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6 text-center">
          <img className="triImage featureImg center-block" alt="featureImage" src="./images/VODpicture.jpg" />

        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 text-center">
          <h2>Track Your Progress</h2>
          <br></br>
          <p>Take your game to the next level. Track your progress with our detailed Summoner Dashboard, highlighting your ELO progress over time, champion mastery, and in-game stats.</p>          
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>
);

export default FeaturesDiv;
