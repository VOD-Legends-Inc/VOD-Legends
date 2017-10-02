import React from "react"; 
import "./BodyContent.css";
import VodInbox from "./vodinbox/VodInbox";
import CoachVods from "./coachvods/CoachVods";
import CoachProfile from "./coachprofile/CoachProfile";

const BodyContent = () => (

<div id="bodyContent">

	<div className="tab-content">

		<div id="vodInbox" className="tab-pane fade in active">
			<VodInbox />
		</div>

		<div id="coachVods" className="tab-pane fade">
			<CoachVods />
		</div>

		<div id="coachProfile" className="tab-pane fade">
			<CoachProfile />
		</div>

	</div>

</div>

);

export default BodyContent;
