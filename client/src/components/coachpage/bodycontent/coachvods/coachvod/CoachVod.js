import React, { Component } from "react"; 
import "./CoachVod.css";

class CoachVod extends Component{
	state = {
		commentsArray: this.props.vodComments,	
		commentNumber: "",
		timeStamp: "",
		textArea: "",
		finalReportVisible: false,
	}

	commentClick = event => {
		let {value} = event.target;
    	let commentToShow = this.state.commentsArray[value - 1];
    	
    	this.setState({
    		commentNumber: commentToShow.commentNumber,
    		timeStamp: commentToShow.timeStamp,
    		textArea: commentToShow.textArea,
    		finalReportVisible: false,
    	});
    	console.log(this.state);
	}

	finalReportClick = event => {
		this.setState({finalReportVisible: true});
	}


	render(){

		const commentsForButtons = [];

		for (var i = 1; i <= this.props.vodComments.length; i++){
			commentsForButtons.push(<button key={i} type="button" className="btn btn-primary" onClick={this.commentClick} value={i}>{i}</button>)
		};


		return(

			<div id="coachVod">

				<h4 className="text-center">Your Student's VOD: <span><u>{this.props.student}  </u></span></h4>

				<h5 className="text-center">{this.props.vodTitle}</h5>

				<iframe className="center-block" width="80%" height="400" src={this.props.vodUrl} frameBorder="0" title="video" allowFullScreen></iframe>

				<div id="coachVodCommentBackground">
					<h5 className="text-center"><u>Your Coaching Comments</u></h5>
					<div id="commentButtons">
						{commentsForButtons}
						<button type="button" className="btn btn-primary" onClick={this.finalReportClick}>Final Report</button>
					</div>
				</div>
				
				{
					!this.state.finalReportVisible
					?
					<div id="coachVodForm">
						<p id="coachComment">Comment Number: <span><u> #{this.state.commentNumber}</u></span></p>
						
						<p id="timeStamp">Timestamp: <span><u> {this.state.timeStamp}</u></span></p>


						<p>Your Coaching Comment:</p>
					    <textarea id="coachingComment" rows="4" value={this.state.textArea} />
					</div>
					: 
					<div id="finalReportDiv">
						
						<h5 className="text-center"><u>Final Report</u></h5>	
						
						<p>Overall Game Review:</p>
					    <textarea id="coachingComment" rows="8" value={this.props.overall}  />

					    <p>Key Areas of Improvement</p>
					    <input type="text" value={this.props.improvement}/>

					    <p>Usefule Resources</p>
					    <input type="text" value={this.props.resources}/>



					</div>
				}

			</div>
		)
	}

}

export default CoachVod;
