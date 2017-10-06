import React, { Component } from "react"; 
import "./StudentProfile.css";
import StudentAPI from "../../../../utils/studentAPI";

export default class StudentProfile extends Component {
		state = {
			editButtonSelected: false,
			disabled: true,
			studentID: "59d65ee217664a80bc6556c3",
			studentData: []
		}

		loadStudent = event => {

			StudentAPI.getStudent(this.state.studentID)
			    	.then(res =>
		        		this.setState({studentData: res.data})
			    	)
			      	.catch(err => console.log(err))
			console.log(this.state)
		};

		componentDidMount() {
	    	this.loadStudent();
	  	};

		editClick = event => {
			this.setState({disabled: false})
		}
		submitClick = event => {
			this.setState({disabled: true})
		}

		render(){
		    return (
				<div id="studentProfile">
					
					<div id="student">

						<h4>Your Student Profile</h4>
						<img id="profilePic" className="center-block" src="./images/empty_profile.png" alt="prof" />
						

						<div className="col-sm-6 col-md-6 col-lg-6">

							<label> First Name</label>
							<input id="firstName" className="profileText form-control" disabled={this.state.disabled} type="text" value={this.state.studentData.firstName} />
						
						</div>

						<div className="col-sm-6 col-md-6 col-lg-6">

							<label> Last Name </label>
							<input id="lastName" className="profileText form-control" disabled={this.state.disabled} type="text" value={this.state.studentData.lastName} />

						</div>
						
							<label> Username </label>
							<input id="userName" className="profileText form-control" disabled={this.state.disabled} type="text" value={this.state.studentData.lolUserName} />

							<label> Role</label>
							<input id="role" className="profileText form-control" disabled={this.state.disabled} type="text"  value={this.state.studentData.role}/>

							<label> Bio </label>
							<textarea id="bio" className="profileText form-control" disabled={this.state.disabled} rows="5" type="text" value={this.state.studentData.bio}></textarea>

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