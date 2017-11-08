import React from "react";
import "./PricingDiv.css";

const PricingDiv = () => (

  <div id="pricingDiv" className="sectionDiv text-center">

  <div className="sectionDiv text-center size5">

    <div className="row textgold">
      <h2>Pricing</h2>
    </div>

    <div className="row">
      <div className="col-sm-4 col-md-4 col-lg-4">

        <img src="./images/one.png" alt="priceImage" />
        <h3>One VOD Review<br/>$20</h3>
      </div>
      <div className="col-sm-4 col-md-4 col-lg-4">
        <img src="./images/five.png" alt="priceImage" />
        <h3>Five VOD Reviews<br/>$80</h3>
      </div>

      <div className="col-sm-4 col-md-4 col-lg-4">
        <img src="./images/ten.png" alt="priceImage" />
        <h3>Ten VOD Reviews<br/>$120</h3>
        </div>
      </div>
    </div>
  </div>
);

export default PricingDiv;
