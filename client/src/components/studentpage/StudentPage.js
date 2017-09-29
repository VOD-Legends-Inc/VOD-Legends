import React from "react";
import Navbar from "./navbar/Navbar";
import LeftDiv from "./leftdiv/LeftDiv";
import BodyContent from "./bodycontent/BodyContent";
import FooterDiv from "./footerdiv/FooterDiv"

const StudentPage = () => (
  <div id="studentPage" className="container-fluid">
    <Navbar />
    <div id="studentPageRow" className="row">
    	<div className="col-sm-1 col-md-1 col-lg-1"></div>
    	<LeftDiv />
    	<BodyContent />
    </div>
    <FooterDiv />
  </div>
);

export default StudentPage;