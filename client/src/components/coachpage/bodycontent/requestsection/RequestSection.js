import React from "react"; 
import "./RequestSection.css";
import RequestInbox from "./requestinbox/RequestInbox"

const RequestSection = () => (
	<div id="requestSection">

		<h3 className="text-center">VOD Review Requests</h3>
		<h4><u>VOD Request Inbox</u></h4>
		<RequestInbox /><br/><br/><br/><br/><br/><br/>

		<label className="control-label" for="notefromstudent">Message from Student:</label>
	    <div>
	    	<textarea rows="4" cols="65" name="notefromstudent" form="vodRequestCoach" />
	    </div>

		<form className="form-horizontal" id="vodRequestCoach">
		    <div className="form-group">
		      
		      <label className="control-label" for="vodtitle">VOD Title:</label>
		      <div>
		        <input type="text" className="form-control" id="vodtitle" placeholder="" name="vodtitle" />
		      </div>
		      
		      <label className="control-label" for="noteforcoach">Message for your Coach:</label>
		      <div>
		        <textarea rows="4" cols="65" name="noteforcoach" form="vodRequest" />
		      </div>
		      
		      <button id="vodRequestButton" type="submit" form="vodRequest" value="Submit">Send VOD Review Request</button>
		    </div>

		</form>

	</div>


)

export default RequestSection;
