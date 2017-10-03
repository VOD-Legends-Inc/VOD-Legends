import React, { Component } from "react"; 
import "./VodRequest.css";
import Pagination from "./pagination/Pagination";
import CoachFilters from "./coachfilters/CoachFilters";
import CoachImage from "./coachimage/CoachImage";
import VodRequestForm from "./vodrequestform/VodRequestForm";

class VodRequest extends Component {
	state = {
		coachSearchVisible: true,
		vodFormVisible: false
	};

	coachImageClick = event => {
		alert("this worked");
		this.setState({vodFormVisible: true});
		this.setState({coachSearchVisible: false});
	};

	cancelButtonClick = event => {
		alert("this worked");
		this.setState({vodFormVisible: false});
		this.setState({coachSearchVisible: true});
	}

    render() {
        return (
        	<div id="vodRequest">

        		{
        			this.state.coachSearchVisible
        			?
        			<div>
						<h4>Coach Search:</h4>
						<Pagination />
						<CoachFilters />

						<div id="coachImages">
							<a href="#" onClick={this.coachImageClick}><CoachImage /></a>
							<a href="#" onClick={this.coachImageClick}><CoachImage /></a>
							<a href="#" onClick={this.coachImageClick}><CoachImage /></a>
							<a href="#" onClick={this.coachImageClick}><CoachImage /></a>
							<a href="#" onClick={this.coachImageClick}><CoachImage /></a>
							<a href="#" onClick={this.coachImageClick}><CoachImage /></a>
						</div>
					</div>
					: null
				}

				{
					this.state.vodFormVisible
					?
					<div>
						<VodRequestForm />
						<div id="requestFormButtons" className="center-block">
							<button id="vodRequestButton" type="submit" form="vodRequest" value="Submit">Send VOD Review Request</button>
							<button id="requestCancelButton" form="vodRequest" onClick={this.cancelButtonClick}>Cancel</button>
						</div>
					</div>
					: null
				}
			</div>
		)
    }

}

export default VodRequest;
