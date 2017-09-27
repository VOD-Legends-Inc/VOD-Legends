import React from "react";
import Jumbotron from "./jumbotron/Jumbotron";
import ThirdsDiv from "./thirdsdiv/ThirdsDiv";
import FeaturesDiv from "./featuresdiv/FeaturesDiv";
import RegisterDiv from "./registerdiv/RegisterDiv";
import PricingDiv from "./pricingdiv/PricingDiv";
import CoachDiv from "./coachdiv/CoachDiv";
import FooterDiv from "./footerdiv/FooterDiv";


const HomePage = () => (
  <div className="container-fluid">
    <Jumbotron />
    <ThirdsDiv />
    <FeaturesDiv />
    <RegisterDiv />
    <PricingDiv />
    <CoachDiv />
    <FooterDiv />
  </div>
);

export default HomePage;