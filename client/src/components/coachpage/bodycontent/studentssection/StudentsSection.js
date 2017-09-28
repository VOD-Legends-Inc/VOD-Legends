import React from "react"; 
import "./StudentsSection.css";
import ReviewedVODSTable from "./reviewedvodstable/ReviewedVODSTable"

const StudentsSection = () => (
	<div id="studentsSection">
		<h3 className="text-center">Your Students</h3>
		<div>Placeholder for Student Images</div>

		<h4>Student's Reviewed VODS</h4>
		<ReviewedVODSTable />

		<iframe className="center-block" width="90%" height="470" src="https://www.youtube.com/embed/8PMvZS8WAhs" frameborder="0" allowfullscreen></iframe>

		<div id="commentPagination" className="pull-left">
			<ul className="pagination">
			  <li><a href="#">1</a></li>
			  <li><a href="#">2</a></li>
			  <li><a href="#">3</a></li>
			  <li><a href="#">4</a></li>
			  <li><a href="#">5</a></li>
			  <li><a href="#">6</a></li>
			  <li><a href="#">7</a></li>
			  <li><a href="#">8</a></li>
			  <li><a href="#">9</a></li>
			  <li><a href="#">10</a></li>
			  <li><a href="#">Final Report</a></li>
			</ul>
		</div>

		<form className="form-horizontal" id="commentInfo">
		    <div className="form-group">

		      <label className="control-label" for="timestampcoach">Time Stamp:</label>
		      <div>
		        <input type="text" className="form-control" id="timestampcoach" name="vodtitle" />
		      </div>
		   
		      <label className="control-label" for="notefromcoach">Message from your Coach:</label>
		      <div>
		        <textarea rows="4" cols="65" name="notefromcoach" form="vodRequest" />
		      </div>

		      <button id="vodRequestButton" type="submit" form="vodRequest" value="Submit">Send VOD Review Request</button>
		    </div>
		</form>  

		


	</div>


)

export default StudentsSection;
