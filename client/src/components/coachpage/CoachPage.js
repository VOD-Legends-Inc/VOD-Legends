import React from "react";
import "./CoachPage.css";
import Navbar from "./navbar/Navbar";
import BodyContent from "./bodycontent/BodyContent";
import FooterDiv from "./footerdiv/FooterDiv";


const CoachPage = () => (
  <div id="coachPage" className="container">
    <Navbar />
    <BodyContent />
    <FooterDiv />
  </div>
);

export default CoachPage;