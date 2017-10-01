import React from "react"; 
import "./VodReview.css";

const VodReview = () => (

<div id="vodReview">
	
	<h4 className="text-center">Your Student's VOD: <span><u> Username </u></span></h4>

	<h5 className="text-center">Zyra Game against Sona - September 8, 2017</h5>

	<iframe className="center-block" width="80%" height="400" src="https://www.youtube.com/embed/8PMvZS8WAhs" frameborder="0" allowfullscreen></iframe>

	<div id="addCommentButtons">
		<button type="button" className="btn btn-success">Add Comment</button>
		<button type="button" className="btn btn-success">Add Final Report</button>
	</div>

	<h5 className="text-center"><u>Your Coaching Comments</u></h5>
	<div id="commentButtons">
		<button type="button" className="btn btn-primary">1</button>
		<button type="button" className="btn btn-primary">2</button>
		<button type="button" className="btn btn-primary">3</button>
		<button type="button" className="btn btn-primary">4</button>		
		<button type="button" className="btn btn-primary">5</button>
		<button type="button" className="btn btn-primary">6</button>
	</div>

	<p id="coachCommentNumber">Comment Number: <span><u> #6</u></span></p>
	
	<p id="coachTimeStamp">Timestamp: <span><u> 2:51</u></span></p>


	<p>Your Coaching Comment:</p>
    <textarea id="coachingComment" rows="4"  />

    <div id="inboxSubmitButtons">
		<button type="button" className="btn btn-success">Send VOD Review</button>
		<button type="button" className="btn btn-success">Return to Inbox</button>
	</div>


</div>

);

export default VodReview;
