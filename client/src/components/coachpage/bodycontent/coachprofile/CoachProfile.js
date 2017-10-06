import React, { Component } from "react"; 
import "./CoachProfile.css";
import CoachAPI from "../../../../utils/coachAPI";

export default class CoachProfile extends Component {
		state = {
			editButtonSelected: false,
			disabled: true,
			coachID: "59d65ee217664a80bc6556bf",
			coachData: []
		}

		loadCoaches = event => {

			CoachAPI.getCoach(this.state.coachID)
			    	.then(res =>
		        		this.setState({coachData: res.data})
			    	)
			      	.catch(err => console.log(err))
			console.log(this.state)
		};

		componentDidMount() {
	    	this.loadCoaches();
	  	};

		editClick = event => {
			this.setState({disabled: false})
			console.log(this.state)
		}
		submitClick = event => {
			this.setState({disabled: true})
		}

		render(){
		    return (
				<div id="coachProfile">
					
					<div id="coach">

						<h4>Your Coach Profile</h4>
						<img id="profilePic" className="center-block" src="./images/empty_profile.png" alt="prof" />
						

						<div className="col-sm-6 col-md-6 col-lg-6">

							<label> First Name</label>
							<input id="firstName" className="profileText form-control" disabled={this.state.disabled} type="text" value={this.state.coachData.firstName} />
						
						</div>

						<div className="col-sm-6 col-md-6 col-lg-6">

							<label> Last Name </label>
							<input id="lastName" className="profileText form-control" disabled={this.state.disabled} type="text" value={this.state.coachData.lastName} />

						</div>
						
							<label> Username </label>
							<input id="userName" className="profileText form-control" disabled={this.state.disabled} type="text" value={this.state.coachData.lolUserName} />

							<label> Role</label>
							<input id="role" className="profileText form-control" disabled={this.state.disabled} type="text"  value={this.state.coachData.role}/>

							<label> ELO</label>
							<input id="elo" className="profileText form-control" disabled={this.state.disabled} type="text"  value={this.state.coachData.elo} />

							<label> Server </label>
							<input id="server" className="profileText form-control" disabled={this.state.disabled} type="text"  value={this.state.coachData.server} />

							<label> Main Champion </label>
							<input id="userName" className="profileText form-control" disabled={this.state.disabled} type="text"  value={this.state.coachData.mainChampion}/>

							<label> Languages </label>
							<input id="language" className="profileText form-control" disabled={this.state.disabled} type="text" value={this.state.coachData.language} />

							<label> Bio </label>
							<textarea id="bio" className="profileText form-control" disabled={this.state.disabled} rows="5" type="text" value={this.state.coachData.bio}></textarea>

							<br />
							<button onClick={this.editClick} type="button" id="editButton" className="btn-primary btn center-block">Edit Profile</button>
							<br />
							<button onClick={this.submitClick} type="button" id="profileButton" className="btn-primary btn center-block">Update Profile</button>
							<br />

					</div>
									
				</div>
			)
		}
	}
