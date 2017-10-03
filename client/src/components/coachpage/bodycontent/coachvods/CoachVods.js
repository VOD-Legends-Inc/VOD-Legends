import React, { Component } from "react"; 
import "./CoachVods.css";
import StudentImages from "./studentimages/StudentImages";
import CoachVodImage from "./coachvodimage/CoachVodImage";
import CoachVod from "./coachvod/CoachVod";

class CoachVods extends Component {
	state = {
		vodSectionVisible: false,
		studentSectionVisible: true,
	};

	vodImageClick = event => {
		alert("this worked");
		this.setState({studentSectionVisible: false});
		this.setState({vodSectionVisible: true});
	}

	cancelButtonClick = event => {
		alert("this worked");
		this.setState({studentSectionVisible: true});
		this.setState({vodSectionVisible: false});
	}

	render() {
	    return (
	    	<div id="coachVods">

	    		{
	    			this.state.studentSectionVisible
	    			?
	    			<div>
		    			<h4>Your Students</h4>
						<StudentImages />
						<div id="studentNavButtons">
							<button type="button" className="btn btn-primary">Previous</button>
							<button type="button" className="btn btn-primary">Next</button>
						</div>

						<h4>Your Student's Reviewed VODs</h4>
						<div id="coachVodImages">
							<a href="#" onClick={this.vodImageClick}><CoachVodImage /></a>
							<a href="#" onClick={this.vodImageClick}><CoachVodImage /></a>
							<a href="#" onClick={this.vodImageClick}><CoachVodImage /></a>
						</div>
						<div id="studentVodNavButtons">
							<button type="button" className="btn btn-primary">Previous</button>
							<button type="button" className="btn btn-primary">Next</button>
						</div>
					</div>
					: null
				}
				{
					this.state.vodSectionVisible
					?
					<div>
						<CoachVod />
						<button type="button" className="btn btn-success center-block">Return to Your Students</button>
					</div>
					: null
				}

				</div>

	    )
	}

}

export default CoachVods;
