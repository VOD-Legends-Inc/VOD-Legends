import React, { Component } from "react"; 
import "./VodInbox.css";
import VodReview from "./vodreview/VodReview";
import VodImage from "./vodimage/VodImage";


class VodInbox extends Component {
	state = {
		vodSelected: false
	};

	vodClick = event => {
		this.setState({vodSelected: true});
	};

	returnToInbox = event => {
		this.setState({vodSelected: false});
	}

	render() {
	    return (
			<div id="vodInbox">
				
				{
					!this.state.vodSelected
						? <div id="inbox">
				
							<h4>Your VOD Request Inbox</h4>

							<div id="vodImages">

								<a href="" onClick={this.vodClick}><VodImage /></a>
								<a href="" onClick={this.vodClick}><VodImage /></a>
								<a href="" onClick={this.vodClick}><VodImage /></a>
								<a href="" onClick={this.vodClick}><VodImage /></a>
								<a href="" onClick={this.vodClick}><VodImage /></a>
								<a href="" onClick={this.vodClick}><VodImage /></a>	

							</div>

							<div id="inboxNavButtons">
								<button type="button" className="btn btn-primary">Previous</button>
								<button type="button" className="btn btn-primary">Next</button>
							</div>

						</div>
						: null
				}
				
				{
					this.state.vodSelected
						? 
						<div>
							<VodReview />
							<div id="inboxSubmitButtons">
								<button type="button" className="btn btn-success">Send VOD Review</button>
								<button type="button" className="btn btn-success" onClick={this.returnToInbox}>Return to Inbox</button>
							</div>
						</div>
						: null
				}

			</div>
		)
		
	}
	
}

export default VodInbox;
