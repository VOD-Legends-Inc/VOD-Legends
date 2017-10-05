import React from "react";
import "./PricingDiv.css";

const PricingDiv = () => (
  <div className="sectionDiv text-center">
    <div className="row">
      <h2>Pricing</h2>
    </div>

    <div className="row">
      <div className="col-sm-4 col-md-4 col-lg-4">
        <img src="./images/one.png" alt="priceImage" />
        <p>One VOD Review<br/>$20</p>
      </div>
      <div className="col-sm-4 col-md-4 col-lg-4">
        <img src="./images/five.png" alt="priceImage" />
        <p>Five VOD Reviews<br/>$80</p>
      </div>

      <div className="col-sm-4 col-md-4 col-lg-4">
        <img src="./images/ten.png" alt="priceImage" />
        <p>Ten VOD Reviews<br/>$120</p>
      </div>
    </div>    

  </div>
);

export default PricingDiv;
