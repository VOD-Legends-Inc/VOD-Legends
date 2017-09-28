import React from "react"; 
import "./BodyContent.css";
import ProfileSection from "./profilesection/ProfileSection"
import InboxSection from "./requestsection/InboxSection"
import StudentsSection from "./studentssection/StudentsSection"

const BodyContent = () => (

<div id="bodyContent" className="col-sm-9 col-md-9 col-lg-9">

	<div className="tab-content">

		<div id="coachRequest" className="tab-pane fade in active">
			<InboxSection />
		</div>

		<div id="coachStudents" className="tab-pane fade">
			<StudentsSection />
		</div>

		<div id="coachProfile" className="tab-pane fade">
			<ProfileSection />
		</div>

	</div>

</div>

);

export default BodyContent;
