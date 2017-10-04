import React, { Component } from "react"; 
import "./CoachProfile.css";

export default class CoachProfile extends Component {
			state = {
			editButtonSelected: false,
			disabled: true
		}

		editClick = event => {
			this.setState({disabled: false})
		}
		submitClick = event => {
			this.setState({disabled: true})
		}

		render(){
		    return (
				<div id="coachProfile">
					
					<div id="coach">

						<h4>Your Coach Profile</h4>
						<img id="profilePic" className="center-block" src="http://lorempixel.com/400/200" alt="prof" />
						<div id="editProfilePic">
							<div className="text-center">Edit Profile Picture: </div> 
							<input type="file" id="myFile" />
					 	</div>	
						<br />

						<div className="col-sm-6 col-md-6 col-lg-6">

							<label /> First Name
							<input id="firstName" className="profileText form-control" disabled={this.state.disabled} type="text" />
						
						</div>

						<div className="col-sm-6 col-md-6 col-lg-6">

							<label /> Last Name
							<input id="lastName" className="profileText form-control" disabled={this.state.disabled} type="text" />

						</div>
						
							<label /> Username
							<input id="userName" className="profileText form-control" disabled={this.state.disabled} type="text" />

							<label /> Email
							<input id="email" className="profileText form-control" disabled={this.state.disabled} type="Email" />

							<label /> Location
							<input id="location" className="profileText form-control" disabled={this.state.disabled} type="text" />

							<label /> Role
							<input id="role" className="profileText form-control" disabled={this.state.disabled} type="text" />

							<label /> ELO
							<input id="elo" className="profileText form-control" disabled={this.state.disabled} type="text" />

							<label /> server
							<input id="server" className="profileText form-control" disabled={this.state.disabled} type="text" />

							<label /> Main Champion
							<input id="userName" className="profileText form-control" disabled={this.state.disabled} type="text" />

							<label /> Languages
							<input id="language" className="profileText form-control" disabled={this.state.disabled} type="text" />

							<label /> Bio
							<textarea id="bio" className="profileText form-control" disabled={this.state.disabled} rows="5" type="text"></textarea>

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
