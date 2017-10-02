import React from "react"; 
import "./CoachVods.css";
import StudentImages from "./studentimages/StudentImages";
import CoachVodImages from "./coachvodimages/CoachVodImages";
import CoachVod from "./coachvod/CoachVod";

const CoachVods = () => (

<div id="coachVods">

	<h4>Your Students</h4>
	<StudentImages />
	<div id="studentNavButtons">
		<button type="button" className="btn btn-primary">Previous</button>
		<button type="button" className="btn btn-primary">Next</button>
	</div>


	<h4>Your Student's Reviewed VODs</h4>
	<CoachVodImages />
	<div id="studentVodNavButtons">
		<button type="button" className="btn btn-primary">Previous</button>
		<button type="button" className="btn btn-primary">Next</button>
	</div>

	<CoachVod />

</div>

);

export default CoachVods;
