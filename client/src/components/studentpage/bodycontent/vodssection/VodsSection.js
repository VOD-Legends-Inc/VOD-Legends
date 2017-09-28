import React from "react"; 
import "./VodsSection.css";
import VodTable from "./vodtable/VodTable"

const VodsSection = () => (
	<div id="VodsSection">
		<h3 className="text-center">Your VOD Reviews</h3>
		<VodTable /><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

		<h4 className="text-center"><u>Zyra Game against a Sona - Sept. 8, 2017</u></h4>

		<iframe className="center-block" width="90%" height="470" src="https://www.youtube.com/embed/8PMvZS8WAhs" frameborder="0" allowfullscreen></iframe>

		<h4 id="commentLabel">Comments (select comment numbers below)</h4>

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

		      <label className="control-label" for="timestamp">Time Stamp:</label>
		      <div>
		        <input type="text" className="form-control" id="timestamp" name="vodtitle" />
		      </div>
		   
		      <label className="control-label" for="noteforcoach">Message from your Coach:</label>
		      <div>
		        <textarea rows="4" cols="65" name="noteforcoach" form="vodRequest" />
		      </div>

		      <button id="vodRequestButton" type="submit" form="vodRequest" value="Submit">Send VOD Review Request</button>
		    </div>
		</form>  



	</div>

)

export default VodsSection;
