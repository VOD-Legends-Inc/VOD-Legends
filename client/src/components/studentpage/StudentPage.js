import React from "react";
import "./StudentPage.css";
import Navbar from "./navbar/Navbar";
import BodyContent from "./bodycontent/BodyContent";
import FooterDiv from "./footerdiv/FooterDiv";


const StudentPage = () => (
  <div id="studentPage" className="container">
    <Navbar />
    <BodyContent />
    <FooterDiv />
  </div>
);

export default StudentPage;