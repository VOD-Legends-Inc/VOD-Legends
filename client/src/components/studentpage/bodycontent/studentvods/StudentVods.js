import React, { Component } from "react"; 
import "./StudentVods.css";
import StudentVodImage from "./studentvodimage/StudentVodImage";
import StudentVod from "./studentvod/StudentVod";
import VodAPI from "../../../../utils/requestAPI";


class StudentVods extends Component {
	state ={
		vodSectionVisible: true,
		videoSectionVisible: false,
		vodsArray: [],
		vodSelected: "",
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
		console.log(event.target);
	}

	returnButtonClick = event => {
		this.setState({vodSectionVisible: true});
		this.setState({videoSectionVisible: false});
	}

	render(){
		let vodImageArray = [];

    	for(let i = 0; i < this.state.vodsArray.length && i < 6; i++){
    		vodImageArray.push(
    			<a key={i} href="#" onClick={this.vodImageClick}>
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
						<StudentVod />
						<button type="button" className="btn btn-success center-block" onClick={this.returnButtonClick}>Return to Your VODs</button>
					</div>
					: null	
				}
				

			</div>			
		)
	}
}

export default StudentVods;
