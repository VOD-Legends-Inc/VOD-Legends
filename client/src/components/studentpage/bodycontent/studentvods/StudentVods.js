import React, { Component } from "react"; 
import "./StudentVods.css";
import StudentVodImage from "./studentvodimage/StudentVodImage";
import StudentVod from "./studentvod/StudentVod";


class StudentVods extends Component {
	state ={
		vodSectionVisible: true,
		videoSectionVisible: false
	}

	vodImageClick = event => {
		this.setState({vodSectionVisible: false});
		this.setState({videoSectionVisible: true});
	}

	returnButtonClick = event => {
		this.setState({vodSectionVisible: true});
		this.setState({videoSectionVisible: false});
	}

	render(){
		return(
			<div id="studentVods">

				{
					this.state.vodSectionVisible
					?
					<div>
						<h4>Your VODS</h4>
							
						<div id="studentVodImages">
							<a href="" onClick={this.vodImageClick}><StudentVodImage /></a>
							<a href="" onClick={this.vodImageClick}><StudentVodImage /></a>
							<a href="" onClick={this.vodImageClick}><StudentVodImage /></a>
							<a href="" onClick={this.vodImageClick}><StudentVodImage /></a>
							<a href="" onClick={this.vodImageClick}><StudentVodImage /></a>
							<a href="" onClick={this.vodImageClick}><StudentVodImage /></a>
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
