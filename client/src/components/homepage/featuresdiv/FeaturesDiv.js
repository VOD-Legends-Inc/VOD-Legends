import React from "react";
import "./FeaturesDiv.css";

const FeaturesDiv = () => (
  <div className="sectionDiv">
    <div className="container">
      
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6 text-center">
          <h2>Built-in VOD Review Interface and Messaging</h2>
          <p>Our easy-to-use VOD Review Interface allows students to view the exact moments in the game a coaches comment is related to. Additionally, our built-in messaging system makes it so asking your coach a question is quick and simple!</p>
        </div>
        <div className="col-sm-6 col-md-6 col-lg-6">
          <img className="triImage center-block" src="http://lorempixel.com/150/150/cats" />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6 text-center">
          <img className="triImage center-block" src="http://lorempixel.com/150/150/cats" />

        </div>
        <div className="col-sm-6 col-md-6 col-lg-6 text-center">
          <h2>Track Your Progress</h2>
          <p>Take your game to the next level. Track your progress with our detailed Summoner Dashboard, highlighting your ELO progress over time, champion mastery, and in-game stats.</p>          
        </div>
      </div>

    </div>
  </div>
);

export default FeaturesDiv;
