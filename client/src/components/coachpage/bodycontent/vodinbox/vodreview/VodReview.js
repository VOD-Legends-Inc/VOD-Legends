import React, { Component } from "react"; 
import "./VodReview.css";

class VodReview extends Component {
	state = {
		commentNumber: 0,
		currentComment: 0,
		youtubeURL: "https://www.youtube.com/embed/8PMvZS8WAhs",
		finalReportVisible: false,
		timeStamp: "",
		textArea: "",
		coachingComments: [],
		finalButtonVisible: false,
	};

	addComment = event => {
		
		this.state.commentNumber !== this.state.currentComment
		?
		this.setState({
			commentNumber: this.state.currentComment + 1,
			currentComment: this.state.currentComment + 1,
		})
		:
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
			finalReportVisible: true,
			finalButtonVisible: true
		});
	}

	commentComplete = event => {
		let newComment = {
			commentNumber: this.state.commentNumber,
			timeStamp: this.state.timeStamp,
			textArea: this.state.textArea,
		};
		this.state.coachingComments.push(newComment);
		console.log(this.state.coachingComments);
	}

	handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    }

    commentNumberClick = event => {
    	let {value} = event.target;
    	let commentToShow = this.state.coachingComments[value - 1];
    	
    	this.setState({
    		commentNumber: commentToShow.commentNumber,
    		timeStamp: commentToShow.timeStamp,
    		textArea: commentToShow.textArea,
    		finalReportVisible: false,
    		
    	});
    }

    finalReportClick = event => {
    	this.setState({
    		finalReportVisible: true,

    	})
    }

	render(){
		const comments = [];

		let url = this.state.youtubeURL;

		for (var i = 1; i <= this.state.currentComment; i++){
			comments.push(<button type="button" className="btn btn-primary" ref="commentButton" onClick={this.commentNumberClick} key={i} value={i}>{i}</button>);
		};



		return(
			<div id="vodReview">
	
				<h4 className="text-center">Your Student's VOD: <span><u> Username </u></span></h4>

				<h5 className="text-center">Zyra Game against Sona - September 8, 2017</h5>

				<iframe ref="vidRef" className="center-block" width="80%" height="400" src={url} frameBorder="0" onClick={this.pauseVideo} title="video" allowFullScreen></iframe>
	
				<div id="addCommentButtons">
					<button type="button" className="btn btn-success" onClick={this.addComment}>Add Comment</button>
					<button type="button" className="btn btn-success" onClick={this.finalReport}>Add Final Report</button>
				</div>
				
				<div id="coachCommentBackground">
					<h5 className="text-center"><u>Your Coaching Comments</u></h5>
					<div id="commentButtons">
						{comments}
						{
							this.state.finalButtonVisible
							?
							<button type="button" className="btn btn-primary" ref="finalButton" onClick={this.finalReportClick} >Final Report</button>
							: null					
						}
					</div>
				</div>

				{
					!this.state.finalReportVisible
					?
					<div>
						<div id="coachVodForm">
							<p id="coachCommentNumber">Comment Number:</p>
							<input type="text" ref="coachCommentNumber" onChange={this.handleInputChange} name="commentNumber" value={
								this.state.commentNumber === 0
								?
								"No comment selected"
								:
								"Comment #" + this.state.commentNumber				
							} />
							
							<p id="coachTimeStamp">Timestamp:</p>
							<input type="text" ref="coachTimeStamp" onChange={this.handleInputChange} name="timeStamp" value={
								this.state.commentNumber === 0
								?
								"No comment selected"
								:
								this.state.timeStamp
							} />

							<p>Your Coaching Comment:</p>
						    <textarea id="coachingComment" name="textArea" onChange={this.handleInputChange} value={this.state.textArea} rows="4" ref="coachTextArea" />


							<button type="button" id="commentComplete" onClick={this.commentComplete} className="btn btn-primary center-block">Comment Complete</button>
						</div>
					</div>
					: null
				}
				{
					this.state.finalReportVisible
					?
					<div id="finalReportDiv">
						
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
