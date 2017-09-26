import React from "react";
import "./ThirdsDiv.css";

const ThirdsDiv = () => (
  <div className="sectionDiv">
    <div className="container">
      
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4">
          <img className="triImage center-block" src="http://lorempixel.com/150/150/sports" />
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <img className="triImage center-block" src="http://lorempixel.com/150/150/cats" />
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <img className="triImage center-block" src="http://lorempixel.com/150/150/" />
        </div>
      </div>

      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4 text-center">
          <h2>TEXT</h2>
          <p>More text</p>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4 text-center">
          <h2>TEXT</h2>
          <p>More text</p>
        </div>
        <div className="col-sm-4 col-md-4 col-lg-4 text-center">
          <h2>TEXT</h2>
          <p>More text</p>
        </div>
      </div>

    </div>
  </div>
);

export default ThirdsDiv;
