import React, { Component } from "react"; 
import "./VodRequestForm.css";
import RequestAPI from "../../../../../utils/requestAPI";

class VodRequestForm extends Component {
	state = {
		vodtitle: "",
		vodurl: "",
		role: "",
		champion: "",
		noteforcoach: "",
		requestSent: false,
	}

	handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    sendRequest = event => {
    	event.preventDefault();

    	if (this.state.vodtitle && this.state.vodurl) {
	      RequestAPI.saveRequest({
	        coach: this.props.lolUserName,
	        student: "azianpinoy",
	        titleOfVOD: this.state.vodtitle,
	        vodURL: this.state.vodurl,
	        messageToCoach: this.state.noteforcoach,
	        stage: "inbox"
	      })
	        .then(res => console.log(res))
	        .catch(err => console.log(err));
	      this.setState({requestSent: true})
	    }
    }

	render() {


		return(

			<div id="vodRequestForm">

				<div id="requestFormHeader">
					<h4>Your VOD Review Request:</h4>
					<h4 id="toCoach">To Coach: <span><u>{this.props.lolUserName}</u></span></h4>
				</div>

				<form className="form-horizontal" id="vodRequest">
				    <div className="form-group">

					      <label className="control-label" htmlFor="vodtitle">VOD Title:</label>
					      <div>
					        <input type="text" className="form-control" onChange={this.handleInputChange} value={this.state.vodtitle} placeholder="Enter Title for You VOD Here" name="vodtitle" />
					      </div>

					      <label className="control-label" htmlFor="vodurl">URL to your Video:</label>
					      <div>
					        <input type="url" className="form-control" onChange={this.handleInputChange} value={this.state.vodurl} placeholder="Enter URL for your VOD Here" name="vodurl" />
					      </div>

					      <label className="control-label" htmlFor="role">Role you Played:</label>
					      <div>
					        <select name="role" onChange={this.handleInputChange}>
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
					        <select name="champion" onChange={this.handleInputChange}>
							    <option value="default">Choose Champion</option>
							    <option value="top">In Development</option>
							</select>
					      </div>

					      <label className="control-label" htmlFor="noteforcoach">Message for your Coach:</label>
					      <div>
					        <textarea rows="4" name="noteforcoach" value={this.state.noteforcoach} onChange={this.handleInputChange} form="vodRequest" />
					      </div>

				    </div>

				    <button className="center-block" id="vodRequestButton" type="submit" form="vodRequest" value="Submit" onClick={this.sendRequest}>Send VOD Review Request</button>

				    {
				    	this.state.requestSent
				    	?
				    	<p className="text-center" id="sent"> Request Sent! </p>
				    	: null
				    }   
				
				</form>

			 

			</div>


		)
	}
}

export default VodRequestForm;
