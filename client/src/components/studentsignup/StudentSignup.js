import React from "react";
import "./StudentSignup.css";
import Navbar from "./navbar/Navbar";
import BodyContent from "./bodycontent/BodyContent";
import FooterDiv from "./footerdiv/FooterDiv";


const StudentSignup = () => (
  <div id="StudentSignupPage" className="container">
    <Navbar />
    <BodyContent />
    <FooterDiv />
  </div>
);

export default StudentSignup;