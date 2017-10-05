import React from "react";
import "./FooterDiv.css";

const FooterDiv = () => (
  <div id="coachFooter">
  	<div id="footerContainer" className="container-fluid">
  
      <div id="leftFooter">
        <img src="./images/vl.png" />
      </div>

      <div id="footerLinks">
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Terms of Use</a></li>
        </ul>  
      </div>

      <div id="copyright">
		    <p>© 2017 vodLEGENDS</p>
      </div>

    </div>
  </div>
);

export default FooterDiv;
