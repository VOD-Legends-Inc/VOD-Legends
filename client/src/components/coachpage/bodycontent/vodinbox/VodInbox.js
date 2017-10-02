import React from "react"; 
import "./VodInbox.css";
import VodReview from "./vodreview/VodReview";
import VodImage from "./vodimage/VodImage";


const VodInbox = () => (

<div id="vodInbox">
	
	<div id="inbox">
	
		<h4>Your VOD Request Inbox</h4>

		<div id="vodImages">

			<VodImage />
			<VodImage />
			<VodImage />
			<VodImage />
			<VodImage />
			<VodImage />		

		</div>

		<div id="inboxNavButtons">
			<button type="button" className="btn btn-primary">Previous</button>
			<button type="button" className="btn btn-primary">Next</button>
		</div>

	</div>

	<VodReview />

</div>

);

export default VodInbox;
