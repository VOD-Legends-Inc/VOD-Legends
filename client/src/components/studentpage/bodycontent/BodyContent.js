import React from "react"; 
import "./BodyContent.css";
import VodRequest from "./vodrequest/VodRequest";
import StudentVods from "./studentvods/StudentVods";
import StudentProgress from "./studentprogress/StudentProgress";
import StudentProfile from "./studentprofile/StudentProfile";

const BodyContent = () => (

<div id="bodyContent">

	<div className="tab-content">

		<div id="vodRequest" className="tab-pane fade in active">
			<VodRequest />
		</div>

		<div id="studentVods" className="tab-pane fade">
			<StudentVods />
		</div>

		<div id="studentProgress" className="tab-pane fade">
			<StudentProgress />
		</div>

		<div id="studentProfile" className="tab-pane fade">
			<StudentProfile />
		</div>

	</div>

</div>

);

export default BodyContent;
