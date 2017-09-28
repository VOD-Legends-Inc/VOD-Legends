import React from "react";
import Navbar from "./navbar/Navbar";
import LeftDiv from "./leftdiv/LeftDiv";
import BodyContent from "./bodycontent/BodyContent";
import FooterDiv from "./footerdiv/FooterDiv"

const StudentPage = () => (
  <div className="container-fluid">
    <Navbar />
    <div className="row">
    	<LeftDiv />
    	<BodyContent />
    </div>
    <FooterDiv />
  </div>
);

export default StudentPage;