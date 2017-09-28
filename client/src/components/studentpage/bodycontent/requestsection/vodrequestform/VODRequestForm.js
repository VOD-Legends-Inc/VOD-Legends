import React from "react"; 
import "./VODRequestForm.css";

const VODRequestForm = () => (
	<div id="VODRequestForm">
		<form className="form-horizontal" id="vodRequest">
		    <div className="form-group">
		      <label className="control-label" for="vodtitle">VOD Title:</label>
		      <div>
		        <input type="text" className="form-control" id="vodtitle" placeholder="Enter Title for You VOD Here" name="vodtitle" />
		      </div>
		      <label className="control-label" for="vodurl">VOD URL:</label>
		      <div>
		        <input type="url" className="form-control" id="vodurl" placeholder="Enter URL for your VOD Here" name="vodurl" />
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

export default VODRequestForm;
