import React, { Component } from "react"; 
import "./VodRequest.css";
import Pagination from "./pagination/Pagination";
import CoachFilters from "./coachfilters/CoachFilters";
import CoachImage from "./coachimage/CoachImage";
import VodRequestForm from "./vodrequestform/VodRequestForm";
import CoachAPI from "../../../../utils/coachAPI";

class VodRequest extends Component {
	state = {
		coachSearchVisible: true,
		vodFormVisible: false,
		coachesArray: [],
		studentID: "59d432b7affaf94c40bf29a7",
	};

	loadCoaches = event => {

		CoachAPI.getCoaches()
	    	.then(res =>
        		this.setState({ coachesArray: res.data })
	    	)
	      	.catch(err => console.log(err))
	};

	componentDidMount() {
    	this.loadCoaches();
  	};

	coachImageClick = event => {
		this.setState({vodFormVisible: true});
		this.setState({coachSearchVisible: false});
	};

	cancelButtonClick = event => {
		this.setState({vodFormVisible: false});
		this.setState({coachSearchVisible: true});
	}

    render() {

    	let coachesImageArray = [];

    	for(let i = 0; i < this.state.coachesArray.length && i < 12; i++){
    		coachesImageArray.push(
    			<a key={i} href="#" onClick={this.coachImageClick}>
    				<CoachImage key={i} 
    					username={this.state.coachesArray[i].lolUserName}
    					bio = {this.state.coachesArray[i].bio}
    					elo = {this.state.coachesArray[i].elo}
    					rating = {this.state.coachesArray[i].rating}
    					firstName = {this.state.coachesArray[i].firstName}
    					lastName = {this.state.coachesArray[i].lastName}
    				/>
    			</a>
    		)
    	}

        return (        	

        	<div id="vodRequest">

        		{
        			this.state.coachSearchVisible
        			?
        			<div>
	        			<div id="coachSearchHeader">
							<h4>Coach Search:</h4>
						</div>
						<CoachFilters />

						<div id="coachImages">
							{coachesImageArray}
						</div>
						<Pagination />
					</div>


					: null
				}

				{
					this.state.vodFormVisible
					?
					<div>
						<VodRequestForm />
						<div id="requestFormButtons" className="text-center">
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
