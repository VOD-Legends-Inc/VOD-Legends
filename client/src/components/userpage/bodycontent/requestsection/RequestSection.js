import React from "react"; 
import "./RequestSection.css";
import CoachSearch from "./coachsearch/CoachSearch";

const RequestSection = () => (
	<div id="requestSection">
		<h3 className="text-center">Request a VOD Review</h3>
		<h4><u>Search for a Coach</u></h4>
		
		<CoachSearch />
		

		
	</div>


)

export default RequestSection;
