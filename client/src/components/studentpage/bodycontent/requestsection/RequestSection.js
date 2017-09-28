import React from "react"; 
import "./RequestSection.css";
import CoachSearch from "./coachsearch/CoachSearch";
import VODRequestForm from "./vodrequestform/VODRequestForm";

const RequestSection = () => (
	<div id="requestSection">
		<h3 className="text-center">Request a VOD Review</h3>
		
		<h4><u>Search for a Coach</u></h4>
		<CoachSearch />
		
		<h4><u>VOD Request Form</u></h4>
		<VODRequestForm />

		
	</div>


)

export default RequestSection;
