import React from "react";
import "./SignupPage.css";
import Navbar from "./navbar/Navbar";
import BodyContent from "./bodycontent/BodyContent";
import FooterDiv from "./footerdiv/FooterDiv";


const SignupPage = () => (
  <div id="SignupPage" className="container">
    <Navbar />
    <BodyContent />
    <FooterDiv />
  </div>
);

export default SignupPage;