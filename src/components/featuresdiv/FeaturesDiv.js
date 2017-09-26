import React from "react";
import "./FeaturesDiv.css";

const FeaturesDiv = () => (
  <div className="sectionDiv">
    <div className="container">
      
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6 text-center">
          <h2>Feature #1</h2>
          <p>More text</p>
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
          <h2>Feature #1</h2>
          <p>More text</p>          
        </div>
      </div>

    </div>
  </div>
);

export default FeaturesDiv;
