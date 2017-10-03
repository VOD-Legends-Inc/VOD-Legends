import React from "react"; 
import "./ProfileSection.css";
import axios from "axios";


const ProfileSection = () => (
<div id="profileSection">

	<div className="row">
		<div className="container">

			<div className="col-sm-9 col-md-9 col-lg-9">

				<div className="row">

					<div className="col-sm-6 col-md-6 col-lg-6">
						<h3 className="text-center">Your Profile</h3>
						<img id="profilePic" className="center-block" src="http://lorempixel.com/400/200" alt="prof" />
						<div id="editProfilePic">
							<div className="text-center">Edit Profile Picture: 
							</div> 
							<input type="file" id="myFile" />
						</div>	
						<br />
						<a href="#" id="editProfile" className="center-block text-center" />Edit Profile
					</div>

				</div>
				
				<div className="col-sm-6 col-md-6 col-lg-6">

					<label First Name /> First Name
					<input id="firstName" className="profileText form-control" disabled="true" type="text" />
				
				</div>

				<div className="col-sm-6 col-md-6 col-lg-6">

					<label Last Name /> Last Name
					<input id="lastName" className="profileText form-control" disabled="true" type="text" />

				</div>
				
					<label Username /> Username
					<input id="userName" className="profileText form-control" disabled="true" type="text" />

					<label Email /> Email
					<input id="email" className="profileText form-control" disabled="true" type="Email" />

					<label Location /> Location
					<input id="location" className="profileText form-control" disabled="true" type="text" />

					<label /> Role
					<input id="role" className="profileText form-control" disabled="true" type="text" />

					<label /> ELO
					<input id="elo" className="profileText form-control" disabled="true" type="text" />

					<label /> server
					<input id="server" className="profileText form-control" disabled="true" type="text" />

					<label /> Main Champion
					<input id="userName" className="profileText form-control" disabled="true" type="text" />

					<label /> Languages
					<input id="language" className="profileText form-control" disabled="true" type="text" />

					<label Bio /> Bio
					<textarea id="bio" className="profileText form-control" disabled="true" rows="5" type="text"></textarea>

					<br />
					<button type="button" id="editButton" className="btn-primary btn center-block">Edit Profile</button>
					<br />
					<button type="button" id="profileButton" className="btn-primary btn center-block">Update Profile</button>
					<br />			

			</div> 

		</div>

	</div>
</div>

)


export default ProfileSection;