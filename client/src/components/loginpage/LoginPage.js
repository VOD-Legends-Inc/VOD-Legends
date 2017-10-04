import React from "react";
import "./LoginPage.css";
import Navbar from "./navbar/Navbar";
import BodyContent from "./bodycontent/BodyContent";
import FooterDiv from "./footerdiv/FooterDiv";


const LoginPage = () => (
  <div id="LoginPage" className="container">
    <Navbar />
    <BodyContent />
    <FooterDiv />
  </div>
);

export default LoginPage;