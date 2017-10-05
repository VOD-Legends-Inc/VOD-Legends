import React, { Component } from "react"; 
import "./CoachVods.css";
import StudentImage from "./studentimage/StudentImage";
import CoachVodImage from "./coachvodimage/CoachVodImage";
import CoachVod from "./coachvod/CoachVod";
import CoachAPI from "../../../../utils/coachAPI";
import StudentAPI from "../../../../utils/studentAPI";

class CoachVods extends Component {
	state = {
		vodSectionVisible: false,
		studentSectionVisible: true,
		coachID: "59d65ee217664a80bc6556bf",
		coachStudents: [], 
		studentsData: []
	};

	loadPage = event => {

		CoachAPI.getCoach(this.state.coachID)
	    	.then(res =>
        		this.setState({ coachStudents: res.data.studentsArray })
	    	)
	      	.catch(err => console.log(err));

	    console.log(this.state.coachStudents);

	    for(let i = 0; i < this.state.coachStudents.length; i++){
			StudentAPI.getStudent(this.state.coachStudents[i])
		    	.then(res =>
	        		this.state.studentsData.push(res.data)
		    	)
		      	.catch(err => console.log(err));	
		}
	};

	componentDidMount() {
    	this.loadPage();
  	};

	vodImageClick = event => {
		this.setState({studentSectionVisible: false});
		this.setState({vodSectionVisible: true});
		console.log(this.state)
	}

	cancelButtonClick = event => {
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
						<StudentImage />

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
						<button type="button" className="btn btn-success center-block" onClick={this.cancelButtonClick} id="returnStudentButton">Return to Your Students</button>
					</div>
					: null
				}

			</div>

	    )
	}

}

export default CoachVods;
