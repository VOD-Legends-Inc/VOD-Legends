import React from "react"; 
import "./StudentVod.css";

const StudentVod = () => (

<div id="studentVod">

	<h4>Your Chosen VOD:</h4>

	<h5 className="text-center">Zyra Game against Sona - September 8, 2017</h5>

	<iframe className="center-block" width="80%" height="400" src="https://www.youtube.com/embed/8PMvZS8WAhs" frameborder="0" allowfullscreen></iframe>

	<h5 className="text-center"><u>Your Coach's Comments</u></h5>
	<div id="studentCommentButtons" className="text-center">
		<button type="button" className="btn btn-primary">1</button>
		<button type="button" className="btn btn-primary">2</button>
		<button type="button" className="btn btn-primary">3</button>
		<button type="button" className="btn btn-primary">4</button>		
		<button type="button" className="btn btn-primary">5</button>
		<button type="button" className="btn btn-primary active">6</button>
		<button type="button" className="btn btn-primary">7</button>
		<button type="button" className="btn btn-primary">8</button>		
		<button type="button" className="btn btn-primary">9</button>
		<button type="button" className="btn btn-primary">10</button>

		<button type="button" className="btn btn-primary">Final Report</button>
	</div>

	<p id="commentNumber">Comment Number: <span><u> #6</u></span></p>
	
	<p id="studentTimeStamp">Timestamp: <span><u> 2:51</u></span></p>


	<p>Your Coach's Comment:</p>
    <textarea id="coachingComment" rows="4"  />

    
	<button type="button" className="btn btn-success center-block">Return to Your VODs</button>

</div>



);

export default StudentVod;
