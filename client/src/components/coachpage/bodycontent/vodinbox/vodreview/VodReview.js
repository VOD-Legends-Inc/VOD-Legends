import React, { Component } from "react"; 
import "./VodReview.css";
import VodInbox from "../VodInbox";

class VodReview extends Component {
	state = {
		commentNumber: 0,
		currentComment: 0,
		youtubeURL: "https://www.youtube.com/embed/8PMvZS8WAhs",
		finalReportVisible: false,
	};

	addComment = event => {
		this.setState({
			commentNumber: this.state.commentNumber + 1,
			currentComment: this.state.currentComment + 1,
		});
	}

	pauseVideo = event => {
		this.refs.vidRef.pauseVideo()
	}

	finalReport = event => {
		this.setState({
			finalReportVisible: true
		});
	}

	commentComplete = event => {
		let newComment = {
			commentNumber: this.refs.coachCommentNumber.value,
			timeStamp: this.refs.coachTimeStamp.value,
			textArea: this.refs.coachTextArea.value
		};
		console.log(newComment);
	}

	render(){
		const comments = [];

		const coachingComments = [];

		let url = this.state.youtubeURL;

		for (var i = 1; i <= this.state.commentNumber; i++){
			comments.push(<button type="button" className="btn btn-primary" value={i}>{i}</button>);
		};

		return(
			<div id="vodReview">
	
				<h4 className="text-center">Your Student's VOD: <span><u> Username </u></span></h4>

				<h5 className="text-center">Zyra Game against Sona - September 8, 2017</h5>

				<iframe ref="vidRef" className="center-block" width="80%" height="400" src={url} frameborder="0" onClick={this.pauseVideo} allowfullscreen></iframe>
	
				{
					!this.state.finalReportVisible
					?
					<div>
						<div id="addCommentButtons">
							<button type="button" className="btn btn-success" onClick={this.addComment}>Add Comment</button>
							<button type="button" className="btn btn-success" onClick={this.finalReport}>Add Final Report</button>
						</div>
						<h5 className="text-center"><u>Your Coaching Comments</u></h5>
						<div id="commentButtons">
							{comments}
						</div>
						
						<p id="coachCommentNumber">Comment Number: <span><u ref="coachCommentNumber"> #{this.state.currentComment}</u></span></p>
						
						<p id="coachTimeStamp" ref="coachTimeStamp">Timestamp: <span><u> 2:51</u></span></p>

						<p>Your Coaching Comment:</p>
					    <textarea id="coachingComment" rows="4" ref="coachTextArea" />

						<button type="button" id="commentComplete" onClick={this.commentComplete} className="btn btn-primary center-block">Comment Complete</button>
					</div>
					: null
				}
				{
					this.state.finalReportVisible
					?
					<div>
						
						<h5 className="text-center"><u>Final Report</u></h5>	
						
						<p>Overall Game Review:</p>
					    <textarea id="coachingComment" rows="8"  />

					    <p>Key Areas of Improvement</p>
					    <input type="text" />

					    <p>Usefule Resources</p>
					    <input type="text" />



					</div>
					: null
				}

			</div>
		)
	}
} 

export default VodReview;
