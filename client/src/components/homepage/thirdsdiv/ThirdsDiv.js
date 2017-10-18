import React from "react";
import "./ThirdsDiv.css";

const ThirdsDiv = () => (
  <div id="thirdsDiv" className="sectionDiv">
    <div className="container">
      
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4">
          <img className="triImage center-block" alt="featureImage" src="./images/signup.png" />
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <img alt="featureImage" className="triImage center-block" src="./images/reviews.png" />
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">

          <img alt="featureImage" className="triImage center-block" src="./images/challenger.png" />

          <img alt="featureImage" className="triImage2 center-block" src="./images/challenger.png" />

        </div>
      </div>

      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4 text-center">
          <h2>Expert VOD Analysis</h2>
          <p>Submit a video of yourself playing a game of league of legends and receive Diamoond-level+ review and analysis within a week!</p>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4 text-center">
          <h2>Flexibility</h2>
          <p>Don't have time for live hour-long coaching sessions? No problem. Simply submit a VOD to your coach, wait for a reply and review your analysis on your own time!</p>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4 text-center">
          <h2>Easy to Use</h2>
          <p>Our websites intuitive user interface provides an easy-to-use platform for VOD review and analysis. You'll start climbing the ELO ladder in no time!</p>
        </div>
      </div>

    </div>
  </div>
);

export default ThirdsDiv;
