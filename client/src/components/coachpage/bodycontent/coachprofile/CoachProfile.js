import React, { Component } from "react"; 
import "./CoachProfile.css";
import CoachAPI from "../../../../utils/coachAPI";

export default class CoachProfile extends Component {
			state = {
			editButtonSelected: false,
			disabled: true,
			firstName: "",
			lastName: "",
			lolUserName: "",
			role: "",
			elo: "",
			server: "",
			mainChampion: "",
			language: "",
			rating: "",
			bio: "",
			id: "59d3d039b6ff801edcc92bf4",
			updateSent: false,
			coachData: {}

		}

		editClick = event => {
			this.setState({disabled: false})
		console.log(this.state);
		}
		submitClick = event => {
			this.setState({disabled: true})
		}

		updateRequest = event => {
    	event.preventDefault();

    	if (
    			this.state.firstName && 
    			this.state.lastName &&
    			this.state.lolUserName &&
    			this.state.role &&
    			this.state.server &&
    			this.state.mainChampion &&
    			this.state.language &&
    			this.state.rating &&
    			this.state.bio &&
    			this.state.role > 0
    		) {

	      CoachAPI.updateRequest(
	      	this.state.id,
	      	{
		        firstName: this.state.firstName,
		        lastName: this.state.lastName,
		        lolUserName: this.state.lolUserName,
		        role: this.state.role,
		        server: this.state.server,
		        mainChampion: this.state.mainChampion,
		        language: this.state.language,
		        rating: this.state.rating,
		        bio: this.state.bio,

	    	}
	       )
	        .then(res => console.log(res))
	        .catch(err => console.log(err));
	      this.setState({updateSent: true})
	    }
    }
	
	handleInputChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state);
    }

	loadCoach = event => {

		CoachAPI.getCoach(this.state.id)
	    	.then(res =>
        		this.setState({coachData: res.data})
	    	)
	      	.catch(err => console.log(err))
	};

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
							<input id="userName" name="lolUserName" onChange={this.handleInputChange} value={this.state.lolUserName} className="profileText form-control" disabled={this.state.disabled} type="text" />

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
