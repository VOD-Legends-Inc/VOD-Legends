import React from "react"; 
import "./RequestSection.css";
import CoachFilters from "./coachfilters/CoachFilters";
import VODRequestForm from "./vodrequestform/VODRequestForm";

const RequestSection = () => (
	<div id="studentRequestSection">

		<h3 className="text-center">Request a VOD Review</h3>
		
		<h4><u>Search for a Coach</u></h4>
		<CoachFilters />
		
		<h4><u>VOD Request Form</u></h4>
		<VODRequestForm />
		
	</div>


)

export default RequestSection;
