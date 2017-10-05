import React, { Component } from "react"; 
import "./StudentVods.css";
import StudentVodImage from "./studentvodimage/StudentVodImage";
import StudentVod from "./studentvod/StudentVod";
import VodAPI from "../../../../utils/requestAPI";


class StudentVods extends Component {
	state ={
		vodID: "",
		vodTitle: "",
		vodUrl: "",
		vodComments: [],
		vodSectionVisible: true,
		videoSectionVisible: false,
		vodsArray: [],
		overall: "",
		improvement: "",
		resources: "",
	}

	loadVods = event => {

		VodAPI.getRequests()
	    	.then(res =>
        		this.setState({ vodsArray: res.data })
	    	)
	      	.catch(err => console.log(err))
	};

	componentDidMount() {
    	this.loadVods();
  	};

	vodImageClick = event => {
		this.setState({vodSectionVisible: false});
		this.setState({videoSectionVisible: true});
		console.log(this.state);
	}

	returnButtonClick = event => {
		this.setState({vodSectionVisible: true});
		this.setState({videoSectionVisible: false});
	}

	finalReportClick = event => {
		this.setState({finalReportVisible: true});
	}

	render(){
		let vodImageArray = [];

    	for(let i = 0; i < this.state.vodsArray.length && i < 6; i++){
    		if(this.state.vodsArray[i].stage === "inbox"){
    			return
    		}
    		else{
    			vodImageArray.push(
	    			<a key={i} href="#" onClick={(event) => { 
	    				this.setState({vodID: this.state.vodsArray[i]._id});
	    				this.setState({vodTitle: this.state.vodsArray[i].titleOfVOD});
	    				this.setState({vodUrl: this.state.vodsArray[i].vodURL});
	    				this.setState({vodComments: this.state.vodsArray[i].comments});
	    				this.setState({overall: this.state.vodsArray[i].finalReport.overall});
	    				this.setState({improvement: this.state.vodsArray[i].finalReport.improvement});
	    				this.setState({resources: this.state.vodsArray[i].finalReport.resources});
	    				this.vodImageClick();
						}
					}>
	    				<StudentVodImage
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
		return(
			<div id="studentVods">

				{
					this.state.vodSectionVisible
					?
					<div>
						<h4>Your VODS</h4>
							
						<div id="studentVodImages">
							{vodImageArray}
						</div>
					</div>
					: null	
				}
				{
					this.state.videoSectionVisible
					?
					<div>
						<StudentVod 
							title={this.state.vodTitle}
							url={this.state.vodUrl}
							comments={this.state.vodComments}
	    					overall={this.state.overall}
	    					improvement={this.state.improvement}
	    					resources={this.state.resources}
						/>
						<button type="button" className="btn btn-success center-block" onClick={this.returnButtonClick}>Return to Your VODs</button>				
					</div>
					: null	
				}	

			</div>			
		)
	}
}

export default StudentVods;
