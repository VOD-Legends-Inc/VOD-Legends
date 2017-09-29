import React from "react"; 
import "./InboxSection.css";
import RequestInbox from "./requestinbox/RequestInbox";

const InboxSection = () => (
	<div id="inboxSection">
		<h3 className="text-center">Pending VOD Review Requests</h3>
		
		<h4><u>VOD Request Inbox</u></h4>
		<RequestInbox /><br/><br/><br/><br/><br/><br/>

		<h4 className="text-center"><u>Zyra Game against a Sona - Sept. 8, 2017</u></h4>

		<label className="control-label" for="notefromstudent">Message from your Student:</label>
	    <div>
	        <textarea rows="4" cols="65" name="notefromstudent" />
	    </div>

		<iframe className="center-block" width="90%" height="470" src="https://www.youtube.com/embed/8PMvZS8WAhs" frameborder="0" allowfullscreen></iframe>
		
		<h4 id="commentLabel">Comments (select comment numbers below)</h4>

		<div id="commentPagination" className="pull-left">
			<ul className="pagination">
			  <li><a href="#">1</a></li>
			  <li><a href="#">2</a></li>
			  <li><a href="#">Add Comment</a></li>
			  <br/><br/>
			  <li><a href="#">Add Final Report</a></li>
			</ul>
		</div><br/><br/><br/><br/><br/><br/>

		<form className="form-horizontal" id="sendVODReview">
		    <div className="form-group">

		      <label className="control-label" for="timestamp">Time Stamp:</label>
		      <div>
		        <input type="text" className="form-control" id="timestamp" name="vodtitle" />
		      </div>
		   
		      <label className="control-label" for="noteforcoach">Message from your Coach:</label>
		      <div>
		        <textarea rows="4" cols="65" name="noteforcoach" form="sendVODReview" />
		      </div>

		      <button id="sendVODReview" type="submit" form="sendVODReview" value="Submit">Send VOD Review</button>
		      <button id="rejectVODReview" type="submit" form="sendVODReview" value="Reject">Reject VOD Review</button>
		    </div>
		</form>  

		
	</div>
)

export default InboxSection;
