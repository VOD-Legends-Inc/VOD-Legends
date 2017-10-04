import React from "react"; 
import "./VodRequestForm.css";

const VodRequestForm = () => (

<div id="vodRequestForm">
	<div id="requestFormHeader">
		<h4>Your VOD Review Request:</h4>
		<h4 id="toCoach">To Coach: <span><u>Azianpinoy</u></span></h4>
	</div>

	<form className="form-horizontal" id="vodRequest">
	    <div className="form-group">
	      <label className="control-label" htmlFor="vodtitle">VOD Title:</label>
	      <div>
	        <input type="text" className="form-control" id="vodtitle" placeholder="Enter Title for You VOD Here" name="vodtitle" />
	      </div>
	      <label className="control-label" htmlFor="vodurl">URL to your Video:</label>
	      <div>
	        <input type="url" className="form-control" id="vodurl" placeholder="Enter URL for your VOD Here" name="vodurl" />
	      </div>
	      <label className="control-label" htmlFor="role">Role you Played:</label>
	      <div>
	        <select name="role">
			    <option value="default">Choose Role</option>
			    <option value="top">Top</option>
			    <option value="jungle">Jungle</option>
			    <option value="mid">Mid</option>
			    <option value="adc">ADC</option>
			    <option value="support">Support</option>
			</select>
	      </div>
	      <label className="control-label" htmlFor="champ">Champion you Played:</label>
	      <div>
	        <select name="role">
			    <option value="default">Choose Champion</option>
			    <option value="top">In Development</option>
			</select>
	      </div>
	      <label className="control-label" htmlFor="noteforcoach">Message for your Coach:</label>
	      <div>
	        <textarea rows="4" name="noteforcoach" form="vodRequest" />
	      </div>
	    </div>
	</form>    


</div>

);

export default VodRequestForm;
