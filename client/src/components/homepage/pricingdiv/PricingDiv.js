import React from "react";
import "./PricingDiv.css";

const PricingDiv = () => (
  <div className="sectionDiv text-center size5">
    <div className="row">
      <h2>Pricing</h2>
    </div>

    <div className="row">
      <div className="col-sm-4 col-md-4 col-lg-4">
        <img className="ten" src="./images/one.png" alt="priceImage" />
        <p>One VOD Review<br/>$20</p>
      </div>
      <div className="col-sm-4 col-md-4 col-lg-4">
        <img className="ten" src="./images/five.png" alt="priceImage" />
        <p>Five VOD Reviews<br/>$80</p>
      </div>

      <div className="col-sm-4 col-md-4 col-lg-4">
        <img className="ten" src="./images/ten.png" alt="priceImage" />
        <p>Ten VOD Reviews<br/>$120</p>
      </div>
{/*      <div className="col-sm-3 col-md-3 col-lg-3">
        <img className="hundred" src="./images/100.png" alt="priceImage" />

        <p>100 VOD Reviews<br/>$1500</p>
      </div>*/}
    </div>    

  </div>
);

export default PricingDiv;
