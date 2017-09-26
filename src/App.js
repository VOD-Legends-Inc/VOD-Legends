import React from "react";
import Jumbotron from "./components/jumbotron/Jumbotron";
import ThirdsDiv from "./components/thirdsdiv/ThirdsDiv";
import FeaturesDiv from "./components/featuresdiv/FeaturesDiv";
import RegisterDiv from "./components/registerdiv/RegisterDiv";
import PricingDiv from "./components/pricingdiv/PricingDiv";
import CoachDiv from "./components/coachdiv/CoachDiv";
import FooterDiv from "./components/footerdiv/FooterDiv";

const App = () => (
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

export default App;
