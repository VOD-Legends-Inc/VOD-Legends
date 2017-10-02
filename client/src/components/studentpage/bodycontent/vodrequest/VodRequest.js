import React from "react"; 
import "./VodRequest.css";
import Pagination from "./pagination/Pagination";
import CoachFilters from "./coachfilters/CoachFilters";
import CoachImages from "./coachimages/CoachImages";
import VodRequestForm from "./vodrequestform/VodRequestForm";

const VodRequest = () => (

<div id="vodRequest">
	<h4>Coach Search:</h4>
	<Pagination />
	<CoachFilters />

	<CoachImages />
	<button type="button" className="btn btn-success center-block">Select Coach</button>

	<VodRequestForm />



</div>

);

export default VodRequest;
