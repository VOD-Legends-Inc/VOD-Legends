import React, { Component } from "react"; 
import "./CoachVods.css";
import StudentImage from "./studentimage/StudentImage";
import CoachVodImage from "./coachvodimage/CoachVodImage";
import CoachVod from "./coachvod/CoachVod";
import CoachAPI from "../../../../utils/coachAPI";
import StudentAPI from "../../../../utils/studentAPI";
import RequestAPI from "../../../../utils/requestAPI";


class CoachVods extends Component {
	state = {
		vodSectionVisible: false,
		studentSectionVisible: true,
		coachID: "59d65ee217664a80bc6556bf",
		coachStudents: [], 
		studentsData: [],
		chosenStudent: "",
		studentVodVisible: false,
		studentVods: [],
		vodID: "",
		vodTitle: "",
		vodUrl: "",
		vodComments: "",
		overall: "",
		improvement: "",
		resources: "",
	};

	loadStudents = event => {

		CoachAPI.getCoach(this.state.coachID)
	    	.then((res) => {
	    		this.setState({ coachStudents: res.data.studentsArray });
	    		for(let i = 0; i < this.state.coachStudents.length; i++){
	    			StudentAPI.getStudent(this.state.coachStudents[i])
	    				.then(res => this.setState({studentsData: res.data}))
	    				.catch(err => console.log(err));
	    		}
        	})
	      	.catch(err => console.log(err));

	};

	studentImageClick = event => {
		this.setState({studentSectionVisible: false});
		this.setState({studentVodVisible: true});
		RequestAPI.getRequests()
			.then(res => this.setState({studentVods: res.data}))
			.catch(err => console.log(err));

	};

	componentDidMount() {
    	this.loadStudents();
    	this.render();
  	};

	vodImageClick = event => {
		this.setState({studentSectionVisible: false});
		this.setState({studentVodVisible: false});
		this.setState({vodSectionVisible: true});
	}

	cancelButtonClick = event => {
		this.setState({studentSectionVisible: true});
		this.setState({vodSectionVisible: false});
	}

	render() {

		let studentImageArray = [];

		studentImageArray.push(
			<a key={1} href="#" onClick={(event) => {
    				this.setState({chosenStudent: this.state.studentsData._id});
    				this.studentImageClick();
				}
			}>
				<StudentImage key={1} 
					username={this.state.studentsData.lolUserName}
					bio = {this.state.studentsData.bio}
					elo = "Bronze Division"
					firstName = {this.state.studentsData.firstName}
					lastName = {this.state.studentsData.lastName}
				/>
			</a>
		)

		let studentVodsArray = [];

		for(let i = 0; i < this.state.studentVods.length && i < 6; i++){
    		studentVodsArray.push(
    			<a key={i} href="#" onClick={(event) => {
    				this.setState({vodID: this.state.studentVods[i]._id});
    				this.setState({vodTitle: this.state.studentVods[i].titleOfVOD});
    				this.setState({vodUrl: this.state.studentVods[i].vodURL});
    				this.setState({vodComments: this.state.studentVods[i].comments});
    				this.setState({overall: this.state.studentVods[i].finalReport.overall});
    				this.setState({improvement: this.state.studentVods[i].finalReport.improvement});
    				this.setState({resources: this.state.studentVods[i].finalReport.resources});
    				this.vodImageClick();
    				}
    			}>
    				<CoachVodImage key={i} 
    					title={this.state.studentVods[i].titleOfVOD}
    					coach={this.state.studentVods[i].coach}
    					student={this.state.studentVods[i].student}
    				/>
    			</a>
    		)
    	}




	    return (
	    	<div id="coachVods">

	    		{
	    			this.state.studentSectionVisible
	    			?
	    			<div>

		    			<h4>Your Students</h4>
		    			<div id="studentImages">
							{studentImageArray}
						</div>

						<div id="studentNavButtons">
							<button type="button" className="btn btn-primary">Previous</button>
							<button type="button" className="btn btn-primary">Next</button>
						</div>
					</div>
					: null
				}
				{
					this.state.studentVodVisible
					?
					<div>
						<h4>Your Student's Reviewed VODs</h4>
						<div id="coachVodImages">
							{studentVodsArray}
						</div>
						<div id="studentVodNavButtons">
							<button type="button" className="btn btn-primary">Previous</button>
							<button type="button" className="btn btn-primary">Next</button>
						</div>
					</div>
					: null					
				}

				}
				{
					this.state.vodSectionVisible
					?
					<div>
						<CoachVod 
							student={this.state.studentsData.lolUserName}
							vodID={this.state.vodID}
		    				vodTitle={this.state.vodTitle}
		    				vodUrl={this.state.vodUrl}
		    				vodComments={this.state.vodComments}
		    				overall={this.state.overall}
		    				improvement={this.state.improvement}
		    				resources={this.state.resources}
						/>
						<button type="button" className="btn btn-success center-block" onClick={this.cancelButtonClick} id="returnStudentButton">Return to Your Students</button>
					</div>
					: null
				}

			</div>

	    )
	}

}

export default CoachVods;
