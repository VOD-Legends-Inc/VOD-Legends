import React, { Component } from "react"; 
import "./VodInbox.css";
import VodReview from "./vodreview/VodReview";
import VodImage from "./vodimage/VodImage";
import VodAPI from "../../../../utils/requestAPI";


class VodInbox extends Component {
	state = {
		vodSelected: false,
		vodsArray: [],
		vodID: "",
		vodTitle: "",
		vodCoach: "",
		vodStudent: "",
		vodUrl: "",
		vodMessageToCoach: "",
	};

	loadVods = event => {

		VodAPI.getRequests()
	    	.then(res =>
				this.setState({vodsArray: res.data})        		
	    	)
	      	.catch(err => console.log(err))
	};

	componentDidMount() {
    	this.loadVods();
  	};

	vodClick = event => {
		this.setState({vodSelected: true});
	};

	returnToInbox = event => {
		this.setState({vodSelected: false});
	};

	render() {
		let vodImageArray = [];

    	for(let i = 0; i < this.state.vodsArray.length && i < 6; i++){

    		if(this.state.vodsArray[i].stage === "inbox"){
    			vodImageArray.push(
	    			
	    			<a key={i} href="#" onClick={(event) => { 
	    				this.setState({vodID: this.state.vodsArray[i]._id});
	    				this.setState({vodTitle: this.state.vodsArray[i].titleOfVOD});
	    				this.setState({vodUrl: this.state.vodsArray[i].vodURL});
	    				this.setState({vodCoach: this.state.vodsArray[i].coach});
	    				this.setState({vodStudent: this.state.vodsArray[i].student});
	    				this.setState({vodMessageToCoach: this.state.vodsArray[i].messageToCoach});
	    				this.vodClick();
					}}>

	    				<VodImage
	    					key={i}
	    					_id={this.state.vodsArray[i]._id}
	    					title={this.state.vodsArray[i].titleOfVOD}
	    					coach={this.state.vodsArray[i].coach}
	    					student={this.state.vodsArray[i].student}
	    				/>

	    			</a>		
	    		)
    		}
    	}
	    		

	    return (
			<div id="vodInbox">
				
				{
					!this.state.vodSelected
						? <div id="inbox">
				
							<h4>Your VOD Request Inbox</h4>

							<div id="vodImages">
								
									{vodImageArray}
								
								
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
							<VodReview 
								student={this.state.vodStudent}
								title={this.state.vodTitle}
								url={this.state.vodUrl}
								id={this.state.vodID}
							/>
							<button id="returnButton" type="button" className="btn btn-success center-block" onClick={this.returnToInbox}>Return to Inbox</button>
						</div>
						: null
				}

			</div>
		)
		
	}
	
}

export default VodInbox;
